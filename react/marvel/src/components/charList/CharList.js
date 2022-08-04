import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './charList.scss';

class CharList extends Component {
  state = {
    chars: [],
    error: false,
    loading: true,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.marvelService
      .getAllCharacters()
      .then(this.onLoadedChars)
      .catch(this.onError);
  }

  onLoadedChars = (chars) => {
    this.setState({ chars, loading: false });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  renderList = (chars) => {
		const list = chars.map(({ name, id, thumbnail }) => {
      const filterImg = thumbnail.indexOf('image_not_available') > 0;
      const stylez = filterImg ? { objectFit: 'fill' } : null;

			return (
        <li
          className="char__item"
          key={id}
          onClick={() => this.props.onChangeSelected(id)}
        >
          <img src={thumbnail} alt={name} style={stylez} />
          <div className="char__name">{name}</div>
        </li>
      );
		});

		return <ul className="char__grid">{list}</ul>;
	};

  render() {
    const { chars, loading, error } = this.state;
    const list = this.renderList(chars);
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? list : null;

    return (
      <div className="char__list">
        {errorMessage}
        {spinner}
        {content}
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharList;

