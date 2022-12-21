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

