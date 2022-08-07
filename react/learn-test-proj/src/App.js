import React, { Component } from 'react';

import styled from 'styled-components';
import './App.css';
import BootstrapTest from './BootstrapTest';

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`

const Header = styled.h2`
  font-size: 22px;
`

const Timer = styled.h2`
  font-size: 30px;
  font-weight: 700;
  padding: 10px
`

const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0,0,0, .2);
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
  cursor: pointer;
`

class WhoAmI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      years: 24,
      text: '+',
      position: '',
      date: new Date(),
    }
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }
  
  commitInputChange = (e, color) => {
    this.setState({
      position: e.target.value
    })
  }

  componentDidMount (){
    this.timer = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {name, surname, links} = this.props
    const {years, position, text, date} = this.state
    
    return (
      <EmpItem>
        <Header>My name is {name}, сд
          surname - {surname}, 
          age - {years}, 
          position - {position}</Header>
        <a href={links}>Hi</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={(e) => this.commitInputChange(e, 'dark')} />
        </form>
        <Button onClick={this.nextYear}>{text}</Button>
        <Timer>Сейчас: {date.toLocaleTimeString()}</Timer>
      </EmpItem>
    )
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto;
`




const DynamicGreating = (props) => {
  return (
    <div className={'mb-3 p-3 border border-' + props.color}>
      {React.Children.map(props.children, child => {
        return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
      })}
    </div>
  )
}

const Message = (props) => {
  return(
    <h2>This counter is {props.counter}</h2>
  )
}

class Counter extends Component {
  state = {
    counter: 0
  }

  changeCounter = () => {
    this.setState(({counter}) => ({
      counter: counter + 1
    }))
  }

  render() {
    return (
      <div className='m-3'>
        <button
          className='btn btn-primary'
          onClick={this.changeCounter}
        >
          Click me
        </button>
        {this.props.render(this.state.counter)}
      </div>
    );
  }
}


function App() {

  return (
    <Wrapper>
     
      <Counter render={counter => (
        <Message counter={counter}/>
      )}/>

      <BootstrapTest
        left = {
          <DynamicGreating color={'primary'}>
            <h2>Menu</h2>
            <li>One</li>
            <li>Two</li>
          </DynamicGreating>
        }
        right = {
          <DynamicGreating color={'primary'}>
            <h2>It's right</h2>
          </DynamicGreating>
        }
      />

      <WhoAmI name='Ivan' surname='Petrichenko' links='facebook.com'/>
      <WhoAmI name='Dima' surname='Shilov' links='444'/>
    </Wrapper>
  )
}

export default App
