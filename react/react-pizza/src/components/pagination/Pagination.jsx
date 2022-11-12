import ReactPaginate from 'react-paginate';

import styles from './paginaiton.module.scss';

export const Pagination = ({ onChangePage }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      className={styles.main}
      previousLabel="<"
      nextLabel=">"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageCount={3}
      pageRangeDisplayed={4}
      renderOnZeroPageCount={null}
    />
  );
};
