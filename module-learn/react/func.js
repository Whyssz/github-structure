/*
  Компоненты высшего порядка (HOC)

    ______memo((props) => {

    }, [compare]) - поверхностное сравнение (для функций)

    ______withCustom(BaseComponent, getData) {
      return (props) => {

        return <BaseComponent props.../>
      }
    }
    OR-miniHOC
      const withLogger = WrappedComponent => props => {
        return <WrappedComponent {...props}/>
      }


    PureComponent (Component) - проверка для классов (поверхностная)
      shouldComponentUpdate(nextProps, nextState)

    
*/