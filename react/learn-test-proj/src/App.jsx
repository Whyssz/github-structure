import { Component } from 'react';
import './App.css';

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
      <>
        <h2>My name is {name}, 
          surname - {surname}, 
          age - {years}, 
          position - {position}</h2>
        <a href={links}>Hi</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={(e) => this.commitInputChange(e, 'dark')} />
        </form>
        <button onClick={this.nextYear}>{text}</button>
      </>
    )
  }
}

function App() {
  return (
    <div className='App'>
      <WhoAmI name='Ivan' surname='Petrichenko' links='facebook.com'/>
      <WhoAmI name='Dima' surname='Shilov' links='444'/>
    </div>
  )
}

export default App
