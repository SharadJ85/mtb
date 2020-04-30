import React from 'react';
import {Link} from "react-router-dom";
import "../../assets/pagination.sass"

const Pagination = ({totalPages,pageId,pageType,media,generalType}) => {
  const range = (min, max) => {
    const array = [];
    for (let i = min; i < max; i++) {
      array.push(i)
    }
    return array
  };
  const pages = parseInt(totalPages);
  const page = parseInt(pageId);
  return (
    <div>
      <nav aria-label="...">
        <ul className="pagination justify-content-center ">;
          {range(-4, 5).map(value => {
            switch (value) {
              case -4 :
                return (<li className={"page-item" + ((page === 1)||(page===2)||(page===3) ? " disabled cursor" : null)}>
                  <Link className=" page-link " to={`/${pageType}/${media}/${generalType}/1`}> First</Link></li>);
              case -3:
                return (<li className={"page-item" + ((page === 1) ? " disabled cursor" : null)}>
                  <Link className=" page-link " to={`/${pageType}/${media}/${generalType}/${page - 1}`}> Prev</Link></li>);
              case 4 :
                return (<li className={"page-item" + ((page === pages)||(page === pages-1)||(page === pages-2) ? " disabled cursor" : null)}>
                  <Link className=" page-link " to={`/${pageType}/${media}/${generalType}/${pages}`}> Last</Link></li>);
              case 3 :
                return (<li className={"page-item" + ((page === pages) ? " disabled cursor" : null)}>
                  <Link className=" page-link " to={`/${pageType}/${media}/${generalType}/${page + 1}`}> Next</Link></li>);
              default:
                return (<li className={"page-item" + (((page + value) === page) ? " active" : null)}>
                  {((page + value) >= 1 && (page + value) <= pages)
                    ? (<Link className=" page-link " to={`/${pageType}/${media}/${generalType}/${page + value}`}>{page + value}</Link>)
                    : null}
                </li>)
            }})}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;