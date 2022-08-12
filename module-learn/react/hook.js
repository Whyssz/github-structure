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
  _______useState
  работа со стейтом (async/sync работает также)

  useState - () => {
    const [slide, setSlide] = useState(0);
    function changeSlide(i){
      setSlide(slide => slid + i)
    }

    Оптимизация: перереднеринг стартового значения, использовать cb или fбезвызова
  }
  _______useEffect
  A/U/R (lifehook) замена

  useEffect - {
    useEffect(() => {
      ...
    }, [args])

    will_
    useEffect(() => {
      ... 
      event

      return () => {
        event
      }
    }, [])
  }
  ________useCallback
  Кеширование фенкций
  оптимизирует перевызов/рендеринг компонента, работает как useEffect только с возможность не запускать функцию при перерендере

  useCallback(() => {
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
          {images.map((url, ri) => {
            return <img className="d-block w-100" src={url} key={i} alt="slide" />;
          })}
        </>
      );
    };
  ________useMemo
  Кеширование значений (запросы, подписки запрещены)

  const count = useMemo(() => {
    return ...
  }, [slide])
  useEffect(() => {
    ....
  }, [obj])

  _______useRef
  Такие же ссылки на элементы, но с особенностью внесения ref без перерендеренга, а также запоминанием прошлого стейта

  const [text, setText] = useState('')

  const myRef = useRef('')

  //взаимодействие с прошлым стейтом
  useEffect(() => {
    myRef.current = text
  })

  _____useDeferredVlaue (отложенное изменение значения) 

  _____useTransition (отложенный рендер)
    const [isPending, startTransition] = useTransition();

  ______customHook (use....)
  Набор гибкого/объединенного функционала (повторное использование логики)

    const useInputWithValidate = (initialVlaue) => {
      const [value, setValue] = useState(initialVlaue)

      const onChange = (event) => {
        setValue(event.target.value)
      }

      const validateInput = () => {
        return value.search(/\d/) >= 0;
      };
      
      return {value, onChange, validateInput}
    };


*/