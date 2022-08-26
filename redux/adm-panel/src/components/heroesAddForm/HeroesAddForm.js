// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

import { useState } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { heroCreated } from '../../actions';

const HeroesAddForm = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [element, setElement] = useState('');

  const { filters } = useSelector((state) => state);
  const { request } = useHttp();
  const dispatch = useDispatch();

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
    setElement('');
  };

  const renderOptions = (list) => {
    return list.map(({ name, label }) => {
      if (name === 'all') return;
      return (
        <option key={name} value={name}>
          {label}
        </option>
      );
    });
  };

  const options = renderOptions(filters);

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
          style={{ height: '130px' }}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
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
          onChange={(e) => setElement(e.target.value)}
        >
          <option>Я владею элементом...</option>
          {options}
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Создать
      </button>
    </form>
  );
};

export default HeroesAddForm;
