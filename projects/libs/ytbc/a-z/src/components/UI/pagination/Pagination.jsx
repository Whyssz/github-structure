import { usePagination } from '../../../hook/usePagination';

const Pagination = ({ totalPages, currPage, changePage }) => {
  const pageArray = usePagination(totalPages);

  return (
    <div className="pagination">
      {pageArray.map((btn) => (
        <span
          onClick={() => changePage(btn)}
          className={
            btn === currPage ? 'pagination_btn btn_current' : 'pagination_btn'
          }
          key={btn}
        >
          {btn}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
