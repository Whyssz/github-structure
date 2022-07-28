
import './app-filter.css'

const AppFilter = (props) => {

return (
  <div className="btn-group">
    <button 
      className="btn btn-light"
      type="button"
      data-name='all'
      onClick={(e) => props.onChangeFilter(e.currentTarget.getAttribute('data-name'))}
    >
      Все сотрудники
    </button>
    <button 
      className="btn btn-outline-light"
      type="button"
      data-name={'rise'}
      onClick={(e) => props.onChangeFilter(e.currentTarget.getAttribute('data-name'))}
    
    >
      На повышение
    </button>
    <button 
      className="btn btn-outline-light"
      type="button"
      data-name={'increase'}
      onClick={(e) => props.onChangeFilter(e.currentTarget.getAttribute('data-name'))}
      
    >
      З/П на повышение
    </button>
  </div>
)
}

export default AppFilter

/*

*/