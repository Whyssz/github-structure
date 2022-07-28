
import './app-filter.css'

const AppFilter = (props) => {

  const buttonsData = [
    {name: 'all', label: 'Все сотрудники'},
    {name: 'rise', label: 'На повышение'},
    {name: 'increase', label: 'З/П на повышение'},
  ]

    const buttons = buttonsData.map(({name, label}) => {
      const active = props.filter === name
      const clazz = active ? 'btn-light' : 'btn-outline-light'
      return (
        <button
          className={`btn ${clazz}`}
          type="button"
          key={name}
          onClick={() => props.onChangeFilter(name)}>
          {label}
        </button>
        
      )
    })

    return (
      <div className='btn-group'>
        {buttons}
      </div>
    )
}

export default AppFilter

/*

*/