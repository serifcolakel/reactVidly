import React from "react";
import _ from "lodash"; //npm i lodash ile dosya kur
import PropTypes from "prop-types"; //npm i pro-types ile dosya kur
//https://reactjs.org/docs/typechecking-with-proptypes.html
const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  console.log(currentPage);
  const pagesCount = Math.ceil(itemsCount / pageSize); // tam sayıya donuşturecek
  if (pagesCount === 1) return null; // sayfa sayısı 1 se boş donderecek
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              className="page-link"
              style={{ cursor: "grab" }} // https://www.w3schools.com/cssref/pr_class_cursor.asp
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  //itemsCount değişkeninin number olduğu tanımlanıyor ve kontrol ediliyor
  //try catch gibi number değilse hata verecek
  //movies.jsx -> içinde Paginate kısmındaki değişiklik kontrolü kısaca
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
