import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setCurrPage } from '../../redux/reducers/filterSlice';

import styles from './paginaiton.module.scss';

export const Pagination = () => {
  const { currPage } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChangePage = (value: number) => {
    dispatch(setCurrPage(value));
};

  return (
    <ReactPaginate
      breakLabel="..."
      className={styles.main}
      previousLabel="<"
      nextLabel=">"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageCount={3}
      forcePage={currPage - 1}
      pageRangeDisplayed={4}
    />
  );
};
