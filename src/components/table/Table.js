import {useState, useEffect} from 'react';
import TableControl from '../tableControl/TableControl';

const Table = ({users, change, heads, showControls}) => {
  const [page, setPage] = useState(0);
  const [resultsForPage, setResultsPage] = useState(5);
  const [countPage, setCountPage] = useState(1);

  const totalData = users && Math.ceil(users.length / resultsForPage);

  useEffect(() => {
    //si se realiza alguna busqueda iremos a la primera página
    if (change) {
      setPage(0);
      setCountPage(1);
    }
  }, [change]);

  const pageUsers = () => {
    if (users) return users.slice(page, page + resultsForPage);
  };
  const nextPage = () => {
    //mientras la paginación "page" sea menor que el resultsForPage de usuarios se mostrarán mas páginas
    if (page < users.length - resultsForPage) setPage(page + resultsForPage);
    if (countPage < totalData) setCountPage(countPage + 1);
  };
  const prevPage = () => {
    if (page > 0) setPage(page - resultsForPage);
    if (countPage > 1 && countPage <= totalData) setCountPage(countPage - 1);
  };
  const handleSelect = e => {
    setResultsPage(parseInt(e.target.value));
    setPage(0);
    setCountPage(1);
  };

  return (
    <>
      <table className="mainTable">
        <thead>
          <tr>
            {heads.map(head => (
              <th key={head}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pageUsers() ? (
            pageUsers().map(({id, name, username, email, phone}) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
      {showControls
		? (
        <TableControl
          totalData={totalData}
          resultsForPage={resultsForPage}
          handleSelect={handleSelect}
          countPage={countPage}
          users={users}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      ) : null
	  }
    </>
  );
};
export default Table;
