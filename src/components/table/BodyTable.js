import {useState, useEffect} from 'react';
const BodyTable = ({users, change}) => {
  const [page, setPage] = useState(0);
  const [resultsForPage, setResultsPage] = useState(3);
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
	    <td className="text-small">Página {countPage} de { totalData}</td>
        <td className="text-small">
          Resultados por página:
          <select
            id=""
            className="select"
            name="filtrar"
            value={resultsForPage}
            onInput={handleSelect}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </td>
        <td className="text-center text-small" >
          <b>Total registros: </b> {users ? users.length : null}{' '}
        </td>
        <td className="text-right" onClick={nextPage}>
          Siguiente
        </td>
      </tr>
    </tbody>
  );
};
export default BodyTable;
