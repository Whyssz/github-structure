import { Component } from 'react';

import styled from 'styled-components';
import './App.css';

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`

const Header = styled.h2`
  font-size: 22px;
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
      position: ''
    }
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }
  
  commitInputChange = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const {name, surname, links} = this.props
    const {years, position, text} = this.state
    
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
      </EmpItem>
    )
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto;
`

function App() {
  return (
    <Wrapper>
      <WhoAmI name='Ivan' surname='Petrichenko' links='facebook.com'/>
      <WhoAmI name='Dima' surname='Shilov' links='444'/>
    </Wrapper>
  )
}

export default App
