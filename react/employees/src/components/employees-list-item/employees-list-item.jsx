import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      salary: `${this.props.salary}$`
    }
  }

  onChangeSalary = (e) => {
    const strSalary = e.target.value
    const salary = strSalary.replace(/[^\d]/g, "")
  
    this.setState({salary: `${salary}$`})
    this.props.onChangeSalary(e.target.name, salary)
  }

  render() {
    const {name, onDelete, onToggleProp, increase, rise} = this.props

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames += ' increase';
    }
    if (rise) {
        classNames += ' like';
    }

    return (
        <li className={classNames}>
          <span 
            className="list-group-item-label" 
            onClick={onToggleProp}
            data-toggle='rise'
            tabIndex={0}
            >
          {name}</span>
          <input 
            type="text" 
            className="list-group-item-input" 
            value={this.state.salary}
            onChange={this.onChangeSalary}
            name={name}
            />
          <div className='d-flex justify-content-center align-items-center'>
            <button type="button"
              className="btn-cookie btn-sm "
              onClick={onToggleProp}
              data-toggle='increase'>
              <i className="fas fa-cookie-bite"></i>
            </button>

            <button type="button"
              className="btn-trash btn-sm "
              onClick={onDelete}>
              <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
          </div>
        </li>
      )
  }
  
}

export default EmployeesListItem;