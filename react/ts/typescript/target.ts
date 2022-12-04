/* 
  type PopupClick = MouseEvent & {
    path: Node[];
  };

  useEffect(() => {
    const handleClickOutside = (event: PopupClick) => {
      if (!event.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);
*/

/*
  interface CarInfo {
    model: string;
    age: number;
  }

  type ActionType = 'new' | 'old' | 'anything';

  const cars: Record<ActionType, CarInfo> = {
    new: { model: 'BMV', age: 1 },
    old: { model: 'Audi', age: 1 },
    anything: { model: 'Mercedes'},
  };

  console.log(cars.new);
*/
