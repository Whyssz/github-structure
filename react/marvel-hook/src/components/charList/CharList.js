import { useState, useCallback, useEffect } from 'react';
import MarvelService from '../../services/MarvelService';
import PropTypes from 'prop-types';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './charList.scss';
import { useRef } from 'react';

const CharList = (props) => {
  const [chars, setChars] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [newItemsLoading, setNewItemLoadng] = useState(false);
  const [offset, setOffset] = useState(1541);
  const [charEnded, setCharEnded] = useState(false);

  const marvelService = new MarvelService();

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = (offset) => {
    onLoadingChars();
    marvelService.getAllCharacters(offset).then(onLoadedChars).catch(onError);
  };

  const onLoadingChars = () => {
    setNewItemLoadng(true);
  };

  const onLoadedChars = (newCharList) => {
    let ended = false;
    if (newCharList.length < 9) {
      ended = true;
    }

    setChars((chars) => [...chars, ...newCharList]);
    setLoading(false);
    setNewItemLoadng(false);
    setOffset((offset) => offset + 9);
    setCharEnded(ended);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const itemsRefs = useRef([]);

  const onChoiseItem = (id) => {
    itemsRefs.current.forEach((item) =>
      item.classList.remove('char__item_selected')
    );
    itemsRefs.current[id].classList.add('char__item_selected');
    itemsRefs.current[id].focus();
  };

  function renderList(chars) {
    const list = chars.map(({ name, id, thumbnail }, index) => {
      const filterImg = thumbnail.indexOf('image_not_available') > 0;
      const stylez = filterImg ? { objectFit: 'fill' } : null;

      return (
        <li
          className="char__item"
          key={id}
          tabIndex={0}
          ref={el => itemsRefs.current[index] = el}
          onClick={() => {
            props.onChangeSelected(id);
            onChoiseItem(index);
          }}
          onKeyDown={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
              props.onChangeSelected(id);
              onChoiseItem(index);
            }
          }}
        >
          <img src={thumbnail} alt={name} style={stylez} />
          <div className="char__name">{name}</div>
        </li>
      );
    });

    return <ul className="char__grid">{list}</ul>;
  };

  const list = renderList(chars);
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
        onClick={() => onRequest(offset)}
        className="button button__main button__long"
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

CharList.propTypes = {
  onChangeSelected: PropTypes.func.isRequired,
};

export default CharList;
