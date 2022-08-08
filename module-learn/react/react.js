/*
  react - библиготека предназначенная для создания UI, имеющая простой шаблон и хорошую гибкость.

  component - сомодостаточный элемент, готовый к использоваиню (имеющий свойства, и своё состояние)

  fragment - обёртка (<Fragment></Fragment> - <></>) key можно повесить только на <Fragment></Fragment>

  props - входные данные компонента - свойства, передаются от родителя

  state - состояние компонента, следит за динамической частью

  Специализация и наследование____ 
    Спецификация - композиция, реакт заточен под неё и она имеет многожество возмжностей +взаимодействие с пропсами

  lifecycle - _DidMount / _DidUpdate / _DidWillUnMount
    constructor - нельзя вызывать сдесь, использовать хук componentDidMount, чтобы не выполнялось действие пока идёт обработка  

  immutability (неизменяемый) - запрет на мутирование элемента после внесения, (изменить старый и вставить новый).

  PROPS.children __________ (передача готовых компонентов/элементов, с возможность передачей пропсов)
    передаёт свойства перечисленный в родителе
    {props.children}
    props {color, children[{...}, {...}]}
  Modify__
    {
      React.Children.map(props.children, child => {
        return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
      })
    }

  render-props/паттерн_____ (передача ффункции)
    Не жёсткая привязка, а гибкая через пропсы
      <Counter render={counter => (
        <Message counter={counter}/>
      )}/>
      {this.props.render(this.state.counter)}    

  ref____ (cofus for the form)
    this.myRef = React.createRef();
    this.myRef.current.focus();

  portal___
    ReactDOM from 'react-dom'; 
    const node = document.createElement('div');
    document.body.appendChild(node);
    return ReactDOM.createPortal(props.children, node)

*/ 
