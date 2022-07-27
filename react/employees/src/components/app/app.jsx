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
        {name: 'Dima S.', salary: 900, increase: false, id: 1},
        {name: 'Olex B.', salary: 1500, increase: true, id: 2},
        {name: 'Alex A.', salary: 1200, increase: false, id: 3},
      ]     
    }
    this.countEmployess = this.state.data.length
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
      id: ++this.countEmployess
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
    // this.setState(({data}) => {
    //   const index = data.findIndex(item => item.id === id),
    //         oldItem = data[index],
    //         newItem = {...oldItem, increase: !oldItem.increase}
    //   return {
    //     data: [...data.slice(0, index), newItem, ...data.slice(index + 1)]
    //   }
    // })

  }

  render(){
    const awardeesEmp = this.state.data.filter(item => item.increase).length
    const employees = this.state.data.length

    return (    
      <div className="app">
        <AppInfo increase={awardeesEmp} employees={employees}/>
  
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
  
        <EmployeesList 
          data={this.state.data}
          onDelete={this.onDeleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.onAddItem} />
      </div>
    )
  }
}

export default App