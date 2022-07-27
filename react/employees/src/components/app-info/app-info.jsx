import './app-info.css'

const AppInfo = ({employees, increase}) => {
  return (
    <div className="app-info">
      <h1>Учёт сотрудников в компании GJ</h1>
      <h2>Общее число сотрудников: {employees}</h2>
      <h2>Премию получают: {increase} </h2>
    </div>
  )
}

export default AppInfo