import { Component } from 'react';
import './App.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      years: 24,
      text: '+++'
    }
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }
 
  render() {
    const {name, surname, links} = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h2>My name is {name}, surname - {surname}, age - {this.state.years}</h2>
        <a href={links}>Hi</a>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <WhoAmI name='Ivan' surname='Petrichenko' links='facebook.com'/>
      <WhoAmI name='Dima' surname='Shilov' links='444'/>
    </div>
  )
}

export default App
