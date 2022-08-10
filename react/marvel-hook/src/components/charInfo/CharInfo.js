import { useState, useEffect } from 'react';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';

const CharInfo = (props) => {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const marvelService = new MarvelService();

  useEffect(() => {
    updateChar();
  }, [props.charId]);

  const updateChar = () => {
    const { charId } = props;
    if (!charId) return;

    onCharLoading();

    marvelService.getCharacter(charId).then(onCharLoaded).catch(onError);
  };

  const onCharLoading = () => {
    setLoading(true);
  };

  const onCharLoaded = (char) => {
    setChar(char);
    setLoading(false);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
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
            <li className="char__comics-item" key={i}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CharInfo;
