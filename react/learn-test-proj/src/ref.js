import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './App.css';

class Form extends Component {

  setRef = (el) => {
    this.myRef = el;
  };

  cilckOnTextArea = () => {
    if (this.myRef) {
      this.myRef.focus();
    }
  };

  render() {
    return (
      <Container>
        <form className="w-50 border mt-5 p-3 m-auto">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              ref={this.setRef}
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              onClick={this.cilckOnTextArea}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <Portal>
            <Msg/>
          </Portal>
        </form>
      </Container>
    );
  }
}

const Portal = (props) => {
  console.log(props.children)
  const node = document.createElement('div');
  document.body.appendChild(node);

  return ReactDOM.createPortal(props.children, node)
};

const Msg = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '400px',
        height: '100px',
        backgroundColor: 'red',
        position: 'absolute',
        right: '0',
        bottom: '0',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Hello
    </div>
  );
};

function AppToo() {
  return <Form />;
}

export default AppToo;
