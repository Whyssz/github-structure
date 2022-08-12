import { useState, useEffect } from 'react';
import useMarvelServices from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';
import { Link } from 'react-router-dom';

const CharInfo = (props) => {
  const [char, setChar] = useState(null);

  const { loading, error, getCharacter, clearError } = useMarvelServices();

  useEffect(() => {
    updateChar();
  }, [props.charId]);

  const updateChar = () => {
    const { charId } = props;
    if (!charId) return;

    clearError();

    getCharacter(charId).then(onCharLoaded);
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const skeleton = char || loading || error ? null : <Skeleton />;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <div className="char__info">
      {errorMessage}
      {spinner}
      {skeleton}
      {content}
    </div>
  );
};

const View = ({ char }) => {
  const { name, description, thumbnail, wiki, homepage, comics } = char;
  const filterImg = thumbnail.indexOf('image_not_available') > 0;
  const stylez = filterImg ? { objectFit: 'fill' } : null;

  return (
    <>
      <div className="char__basics">
        <img style={stylez} src={thumbnail} alt={name} />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{description}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comics.length > 0 ? null : 'There is no comics with this character'}
        {comics.map((item, i) => {
          if (i >= 5) return;
          return (
            <Link to={`comics/${item.resourceURI.slice(-5)}`} className="char__comics-item" key={i}>
              {item.name}
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default CharInfo;
