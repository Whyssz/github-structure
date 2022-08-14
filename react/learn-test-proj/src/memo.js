import { memo, useState, createContext, useContext } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

const dataContext = createContext({
  mail: 'second@example.com',
  text: 'another text',
  forceChangaMail: () => {}
});

const { Provider } = dataContext;

const Form = memo((props) => {
  console.log('render');

  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Email address
          </label>
          <InputComponent />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            value={props.text}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
    </Container>
  );
});

const InputComponent = () => {
  const context = useContext(dataContext);

  return (
    <input
      value={context.mail}
      type="email"
      className="form-control"
      placeholder="name@example.com"
      onFocus={context.forceChangaMail}
    />
  );
};
// class InputComponent extends Component {
//   static contextType = dataContext;
//   render() {
//     return (
//       // <Consumer>
//       //   {
//       //     value => {
//       //       return (
//       //         <input
//       //           value={value.mail}
//       //           type="email"
//       //           className="form-control"
//       //           placeholder="name@example.com"
//       //         />
//       //       );
//       //     }
//       //   }
//       // </Consumer>
//       <input
//         value={this.context.mail}
//         type="email"
//         className="form-control"
//         placeholder="name@example.com"
//       />
//     );
//   }
// }

function Memo() {
  const [data, setData] = useState({
    mail: 'first@example.com',
    text: 'some text',
    forceChangaMail,
  });

  function forceChangaMail() {
    setData({...data, mail: 'change@mail.com'})
  }

  return (
    <Provider value={data}>
      <Form text={data.text} />
      <button
        onClick={() =>
          setData({
            ...data,
            mail: 'second@example.com',
            text: 'another text',
          })
        }
      >
        Click me
      </button>
    </Provider>
  );
}

export default Memo;
