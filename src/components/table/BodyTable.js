import {useState, useEffect} from 'react';
const BodyTable = ({users, change}) => {
  const [page, setPage] = useState(0);
  const [resultsForPage, setResultsPage] = useState(3);

  useEffect(() => {
    //si se realiza alguna busqueda iremos a la primera página
    if (change) {
      setPage(0);
    }
  }, [change]);

  const pageUsers = () => {
    if (users) return users.slice(page, page + resultsForPage);
  };
  const nextPage = () => {
    //mientras la paginación "page" sea menor que el resultsForPage de usuarios se mostrarán mas páginas
    if (page < users.length - resultsForPage) setPage(page + resultsForPage);
  };
  const prevPage = () => {
    if (page > 0) setPage(page - resultsForPage);
  };
  const handleSelect = e => {
    setResultsPage(parseInt(e.target.value));
  };

  return (
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
      <tr className="footerTable">
        <td className="text-left" onClick={prevPage}>
          Anterior
        </td>
        <td>
          Resultados por página:
          <select id="" className="select" name="filtrar" value={resultsForPage} onInput={handleSelect}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="5">5</option>
          </select>
        </td>
        <td className="text-center" colSpan="2">
          <b>Total registros: </b> {users ? users.length : null}{' '}
        </td>
        <td className="text-right" onClick={nextPage}>
          siguiente
        </td>
      </tr>
    </tbody>
  );
};
export default BodyTable;
