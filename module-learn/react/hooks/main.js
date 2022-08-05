/*
  setState - состояние 

  componentDidMount - если что то требуется вызвать при рендеренге

  componentDidUpdate(prevProps, PrevState) - при необходимости что-то отслеживать
    if (this.props.ID !== prevProps.ID) return...

  componentWillUnMount - после удаления компонента

  componentDidCatch(err, info) - предохранитель/обработчик ошибки, реализуется как обертка для ошибок
    static getDerivedStateFromError(error) - только обрабатывает ошибку без дополнительных имзменений дополнений
*/