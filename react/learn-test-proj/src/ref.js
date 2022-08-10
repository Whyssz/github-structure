import { useRef, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

const useInputWithValidate = (initialVlaue) => {
  const [value, setValue] = useState(initialVlaue)

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const validateInput = () => {
    return value.search(/\d/) >= 0;
  };
  
  return {value, onChange, validateInput}
};

const Form = () => {
  const input = useInputWithValidate('')
  const textArea = useInputWithValidate('')
  

  const color = input.validateInput() ? 'text-danger' : null;

  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <input
            type="text"
            value={`${input.value} / ${textArea.value}`}
            className="form=control"
            readOnly
          />
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Email address
          </label>
          <input
            value={input.value}
            type="email"
            className={`form-control ${color}`}
            onChange={input.onChange}
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            onChange={textArea.onChange}
            value={textArea.value}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
    </Container>
  );
};

function AppToo() {
  return <Form />;
}

export default AppToo;
