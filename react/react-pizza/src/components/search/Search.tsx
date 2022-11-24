import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from '../../hooks/useDebounce';
import { setSearchValue } from '../../redux/reducers/filterSlice';

import styles from './search.module.scss';

export const Search: React.FC = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();
  const searchDebounce = useDebounce(value);

  const onSearch = (value: string) => {
    setValue(value);
  };

  useEffect(() => {
    dispatch(setSearchValue(searchDebounce));
  }, [searchDebounce]);

  return (
    <div className={styles.main}>
      <input
        value={value}
        onChange={(e) => onSearch(e.target.value)}
        type="search"
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      <svg
        className={styles.icon}
        height="48"
        viewBox="0 0 48 48"
        width="48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M31 28h-1.59l-.55-.55c1.96-2.27 3.14-5.22 3.14-8.45 0-7.18-5.82-13-13-13s-13 5.82-13 13 5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55v1.58l10 9.98 2.98-2.98-9.98-10zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z" />
        <path d="M0 0h48v48h-48z" fill="none" />
      </svg>
    </div>
  );
};
