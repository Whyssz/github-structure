import * as Yup from 'yup';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Formik,
  Form,
  Field,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './appSearch.scss';

const AppSearch = () => {
  const [char, setChar] = useState(null);

  const { loading, error, clearError, getCharacterByName } = useMarvelService();

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const updateChar = (name) => {
    clearError();

    getCharacterByName(name).then(onCharLoaded);
  };

  const errorMessage = !error ? null : (
    <div className="char__search-critical-error">
      <ErrorMessage />
    </div>
  );

  const result = !char ? null : char.length > 0 ? (
    <div className="result-wrapper">
      <Link
        to={`/characters/${char[0].id}`}
        className="result-wrapper__search success-search"
      >
        {`There is! Visit ${char[0].name} page?`}
      </Link>
    </div>
  ) : (
    <div className="result-wrapper__search error-search">
      The character was not found. Check the name and try again
    </div>
  );

  return (
    <>
      <Formik
        initialValues={{
          charName: 'Hulk',
        }}
        validationSchema={Yup.object({
          charName: Yup.string().required('This field is required'),
        })}
        onSubmit={({ charName }) => {
          updateChar(charName);
        }}
      >
        <Form className="app__form-search">
          <div className="bord-link">
            <Link to="characters/1009368" className="bord-link__char"></Link>
            <Link to="characters/1009220" className="bord-link__char"></Link>
            <Link to="characters/1009718" className="bord-link__char"></Link>
          </div>
          <h2>Or find a character by name:</h2>
          <div className="app__wrapper-search">
            <Field
              id="charName"
              name="charName"
              type="text"
              placeholder="Enter name"
            />
            <button
              className="button button__main"
              type="submit"
              disabled={loading}
            >
              <div className="inner">FIND</div>
            </button>
          </div>
          <FormikErrorMessage
            component="div"
            className="char__search-error"
            name="charName"
          />
          {result}
          {errorMessage}
        </Form>
      </Formik>
    </>
  );
};

export default AppSearch;
