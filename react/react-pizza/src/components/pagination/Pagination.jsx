import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrPage } from '../../redux/reducers/filterSlice';

import styles from './paginaiton.module.scss';

export const Pagination = () => {
  const { currPage } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const onChangePage = (value) => {
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
      renderOnZeroPageCount={null}
    />
  );
};
