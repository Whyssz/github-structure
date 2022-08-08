/*
  RULE:
    1. Вызывать только на верхнем уровне
    2. Вызываются из отдельных файлов (кастомные хуки искл)

  { static func
    setState - состояние (
      ({state}) = передача колбека-асинхронно, есть зависимость от предыдущего значения
      state => - синхронная операция, просто запишет новое значение
    )
  
    componentDidMount - если что то требуется вызвать при рендеренге
  
    componentDidUpdate(prevProps, PrevState) - при необходимости что-то отслеживать
      if (this.props.ID !== prevProps.ID) return...
  
    componentWillUnMount - после удаления компонента
  
    componentDidCatch(err, info) - предохранитель/обработчик ошибки, реализуется как обертка для ошибок
      static getDerivedStateFromError(error) - только обрабатывает ошибку без дополнительных имзменений дополнений
  }

  useState - работа со слайдом (async/sync работает также){
    const [slide, setSlide] = useState(0);
    function changeSlide(i){
      setSlide(slide => slid + i)
    }

    Оптимизация: перереднеринг стартового значения, использовать cb или fбезвызова
  }

  useEffect - A/U/R (lifehook) {
    useEffect(() => {
      ...
    }, [args])

    will_
    useEffect(() => {
      ... 
      () => Event

      return () => {
        () => Event
      }
    }, [])
  }
  
  useCallback(() => { - оптимизирует перевызов/рендеринг компонента, работает как useEffect только с возможность е запускать функцию при перерендере
    ...
    Правильно использовать с useEffect
  }, [])
  ___
      const getImages = useCallback(() => {
      console.log('fetch');

      return [
        'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
        'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
      ];
    }, []);
    
    const Slide = ({ getImages }) => {
      const [images, setImage] = useState([]);

      useEffect(() => {
        setImage(getImages());
      }, [getImages]);

      return (
        <>
          {images.map((url, i) => {
            return <img className="d-block w-100" src={url} key={i} alt="slide" />;
          })}
        </>
      );
    };
*/