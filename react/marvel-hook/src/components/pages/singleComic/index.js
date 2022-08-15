import { Link, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useMarvelService from '../../../services/MarvelService';
import ErrorMessage from '../../errorMessage/ErrorMessage';
import Spinner from '../../spinner/Spinner';

import './singleComic.scss';
import AppBanner from '../../appBanner/AppBanner';

const SingleComic = () => {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);
  const { loading, error, getComic, clearError } = useMarvelService();

  const news = () => useLocation;

  useEffect(() => {
    updateComic();
  }, [comicId]);

  const updateComic = () => {
    clearError();
    getComic(comicId).then(onComicLoaded);
  };

  const onComicLoaded = (comic) => {
    setComic(comic);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !comic) ? (
    <View comic={comic} news={news} />
  ) : null;

  return (
    <>
      <AppBanner />
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

const View = ({ comic }) => {
  const { title, description, pageCount, thumbnail, language, price } = comic;
  let { pathname } = useLocation();

  const findPath = pathname.indexOf('comics/');
  const url = pathname.slice(0, findPath + 6);

  // pathname =
  //   pathname.length === 12 ? pathname.slice(0, -5) : pathname.slice(0, -4);

  return (
    <div className="single-comic">
      <img src={thumbnail} alt={title} className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{title}</h2>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__descr">{pageCount}</p>
        <p className="single-comic__descr">Language: {language}</p>
        <div className="single-comic__price">{price}</div>
      </div>
      <Link to={url} className="single-comic__back">
        Back to all
      </Link>
    </div>
  );
};

export default SingleComic;
