/*
  Redux - инструмент управляющий состоянием данных (state с большим количеством сущностей)

  Schem:
    action - func-action 
      ex: export const inc = () => ({ type: 'INC' });
    reducer - store
    ex: const reducer = (state = initialValue, action) =>..

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