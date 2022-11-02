/*
  1. Readonly<User>
  
  2. Required<Props>

  3. Record<K, T>
    interface PageInfo {
      title: string
    }

    type Page = 'home' | 'about' | 'contact'

    const x: Recodr<Page, PageInfo> = {
      about: {title: 'home'},
      contact: {title: 'contact'},
      home: {title: 'home'},
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

