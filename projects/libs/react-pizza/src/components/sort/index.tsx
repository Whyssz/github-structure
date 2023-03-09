import { memo, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setSort } from "../../redux/filter/slice";
import { SortFilter, SortProperty } from "../../redux/filter/types";

type PopupClick = MouseEvent & {
  path: Node[];
};

export const sortList: SortFilter[] = [
  { name: 'популярности 🠗', sortProperty: SortProperty.RATING_DESC },
  { name: 'популярности 🠕', sortProperty: SortProperty.RATING_INC },
  { name: 'цене 🠗', sortProperty: SortProperty.PRICE_DESC },
  { name: 'цене 🠕', sortProperty: SortProperty.PRICE_INC },
  { name: 'алфавиту', sortProperty: SortProperty.TITLE_CIRILIC },
];

interface SortProps {
  value: SortFilter;
}

export const Sort: React.FC<SortProps> = memo(({ value }) => {
  const [open, setOpen] = useState(false);

  const sortRef = useRef();

  const dispatch = useDispatch();

  const choiceSort = (sort: SortFilter) => {
    dispatch(setSort(sort));
    setOpen(false);
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

  const generateList = (list: SortFilter[]) => {
    const newList = list.map(obj => {
      return (<li
        key={obj.name}
        onClick={() => choiceSort(obj)}
        className={value.sortProperty === obj.sortProperty ? 'active' : ''}
      >
        {obj.name}
      </li>);
    });


    return <ul>{newList}</ul>;
  };

  const list = generateList(sortList);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{value.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          {list}
        </div>
      )}
    </div>
  );
});
