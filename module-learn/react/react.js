/*
  react - библиготека предназначенная для создания UI, имеющая простой шаблон и хорошую гибкость.

  component - сомодостаточный элемент, готовый к использоваиню (имеющий свойства, и своё состояние)

  fragment - обёртка (<Fragment></Fragment> - <></>) key можно повесить только на <Fragment></Fragment>

  props - входные данные компонента - свойства, передаются от родителя

  state - состояние компонента, следит за динамической частью

  lifecycle - _DidMount / _DidUpdate / _DidWillUnMount
    constructor - нельзя вызывать сдесь, использовать хук componentDidMount, чтобы не выполнялось действие пока идёт обработка  

  immutability (неизменяемый) - запрет на мутирование элемента после внесения, (изменить старый и вставить новый).

  PROPS.childred __________
    передаёт свойства перечисленный в родителе
    {props.children}
    props {color, children[{...}, {...}]}
  Modify__
    {
      React.Children.map(props.children, child => {
        return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
      })
    }



*/ 
