import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import PropTypes from 'prop-types';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './charList.scss';

class CharList extends Component {
  state = {
    chars: [],
    error: false,
    loading: true,
    newItemsLoading: false,
    offset: 1541,
    charEnded: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.onRequest();
  }

  onRequest = (offset) => {
    this.onLoadingChars();
    this.marvelService
      .getAllCharacters(offset)
      .then(this.onLoadedChars)
      .catch(this.onError);
  };

  onLoadingChars = () => {
    this.setState({
      newItemsLoading: true,
    });
  };

  onLoadedChars = (newCharList) => {
    let ended = false;
    if (newCharList.length < 9) {
      ended = true;
    }

    this.setState(({ chars, offset }) => ({
      chars: [...chars, ...newCharList],
      loading: false,
      newItemsLoading: false,
      offset: offset + 9,
      charEnded: ended,
    }));
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
    const { chars, loading, error, newItemsLoading, offset, charEnded } =
      this.state;
    const list = this.renderList(chars);
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? list : null;

    return (
      <div className="char__list">
        {errorMessage}
        {spinner}
        {content}
        <button
          disabled={newItemsLoading}
          style={{ display: charEnded ? 'none' : 'block' }}
          onClick={() => this.onRequest(offset)}
          className="button button__main button__long"
        >
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

CharList.propTypes = {
  onChangeSelected: PropTypes.func.isRequired,
};

export default CharList;
