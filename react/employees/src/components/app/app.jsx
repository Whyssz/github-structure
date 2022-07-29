import { Component } from 'react'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {name: 'Dima S.', salary: 900, increase: false, rise: true, id: 1},
        {name: 'Olex B.', salary: 1500, increase: true, rise: true, id: 2},
        {name: 'Alex A.', salary: 1200, increase: false, rise: false, id: 3},
        {name: 'Odim A.', salary: 3000, increase: false, rise: false, id: 4},
      ], 
      term: '',
      filter: 'all' 
    }
  }
  
  onDeleteItem = (id) => {
    this.setState(({data}) => ({
      data: data.filter(item => item.id !== id)
    }))
  }

  onAddItem = (name, salary) => {
    const newItem = {
      name, 
      salary,
      increase: false,
      id: this.state.data.length + 1
    }

    this.setState(({data}) => ({
      data: [...data, newItem]
    }))
  }

  onToggleProp = (id, prop) => {
     this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item
      })
    }))
  }

  searchEmp = (list, term) => {
    if (term.length === 0){
      return list
    }

    const currTerm = term.toLowerCase()

    const newList = list.filter(item => {
      const name = item.name.toLowerCase()
      return name.indexOf(currTerm) > -1
    })

    return newList
  }

  onUpdateSearch = (term) => {
    this.setState({term})
  }

  useFilter = (list, filter) => {
    switch(filter) {
      case 'rise':
        return list.filter(item => item.rise)
      case 'increase':
        return list.filter(item => item.increase)
      default:
        return list
    }
  }

  onChangeFilter = (filter) => {
    this.setState({filter})
  }

  onChangeSalary = (name, salary) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.name === name) {
          return {...item, salary}
        }
        return item
      })
    }))
  }

  render(){
    const { data, term, filter } = this.state
    const awardeesEmp = data.filter(item => item.increase).length
    const employees = data.length
    const visibleDate = this.useFilter(this.searchEmp(data, term), filter)

    return (    
      <div className="app">
        <AppInfo increase={awardeesEmp} employees={employees}/>
  
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter filter={filter} onChangeFilter={this.onChangeFilter} />
        </div>
  
        <EmployeesList 
          data={visibleDate}
          onDelete={this.onDeleteItem}
          onToggleProp={this.onToggleProp}
          onChangeSalary={this.onChangeSalary}
        />
        <EmployeesAddForm onAdd={this.onAddItem} />
      </div>
    )
  }
}

export default App