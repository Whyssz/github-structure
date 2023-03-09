/*
  1. Readonly<User>
  2. Required<Props> - все поля обязательные для заполнения
  2*. Partial - например для обновления профиля может случится, что нужно будет обновить только 1 поле из 5
  
  3. Record<K, T>
  
    interface PageInfo {
      title: string
    }

    type Page = 'home' | 'about' | 'contact' 
    OR 
    enum Info{
      home: 'home',
      about: 'about',
      contact: 'contact'
    }
    type Page = Info;

    const x: Record<Page, PageInfo> = {
      about: {title: 'home'},
      contact: {title: 'contact'},
      home: {title: 'home'},
    }
    OR
    type ArrData = Record<number, ArrNumb[]>
    function backArrNumbs(num: number):ArrData  {
      return [number, number] 
    }

  4. Pick // Выборочная подстановка свойств
    type TodPreview = PIck<Todo, 'title' | 'completed'>

  5. Omit // Выборочное удаление свойств

  6. Exclude<T,U> // Исклачает все типы которые передаются вторым аргументом
    type T0 = Eclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

  7. Extract<T,U> // Оставляет только переданное свойство

  8. NonNullable<T> // Исключает все несуществующие типы, то есть значения null && undifined

  9. ReturnType //return type

  10. InstanceType<T>
*/
