// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHttp } from '../../hooks/http.hook';
import { useSelector, useDispatch } from 'react-redux';
import { heroCreated } from '../../actions';

const HeroesAddForm = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [element, setelEment] = useState('');

	const {filters} = useSelector(state => state)
  const { request } = useHttp();
  const dispatch = useDispatch();

  const filtersRender = () => {
    return filters.map(({ label, value }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newHero = {
      id: uuidv4(),
      name,
      description: desc,
      element,
    };

    request('http://localhost:3001/heroes', 'POST', JSON.stringify(newHero))
      .then(dispatch(heroCreated(newHero)))
      .catch((err) => console.log(err));

    setName('');
    setDesc('');
    setelEment('');
  };

  return (
    <form className="border p-4 shadow-lg rounded" onSubmit={onSubmitHandler}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Имя нового героя
        </label>
        <input
          required
          type="text"
          name="name"
          className="form-control"
          id="name"
          placeholder="Как меня зовут?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          Описание
        </label>
        <textarea
          required
          name="text"
          className="form-control"
          id="text"
          placeholder="Что я умею?"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          style={{ height: '130px' }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="element" className="form-label">
          Выбрать элемент героя
        </label>
        <select
          required
          className="form-select"
          id="element"
          name="element"
          value={element}
          onChange={(e) => setelEment(e.target.value)}
        >
          <option>Я владею элементом...</option>
          {filtersRender()}
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Создать
      </button>
    </form>
  );
};

export default HeroesAddForm;
