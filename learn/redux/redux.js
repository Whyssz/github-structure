/*
  Redux - инструмент управляющий состоянием данных (state с большим количеством сущностей)

  _________bindActionCreators

  EX:
     const bindActionCreator = (creator, dispatch) => (...args) => {
         dispatch(creator(...args))
       }
       cosnt incDispatch = bindActionCreator(inc, dispatch)

       const { incDispatch, decDispatch, rndDispatch } = bindActionCreators({
         incDispatch: inc,
         decDispatch: dec,
         rndDispatch: rnd,
       }, dispatch);

      const { inc, dec, rnd } = bindActionCreators(actions, dispatch)

*/