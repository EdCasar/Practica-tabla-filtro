import {useState, useEffect} from 'react';
import TableControl from '../tableControl/TableControl';

const Table = ({data, change, heads, baseFiels, showControls}) => {
  const [page, setPage] = useState(0);
  const [resultsForPage, setResultsPage] = useState(5);
  const [countPage, setCountPage] = useState(1);

  const totalData = data && Math.ceil(data.length / resultsForPage);

  useEffect(() => {
    //si se realiza alguna busqueda iremos a la primera página
    if (change) {
      setPage(0);
      setCountPage(1);
    }
  }, [change]);

  const pageData = () => {
    if (data) return data.slice(page, page + resultsForPage);
  };
  const nextPage = () => {
    //mientras la paginación "page" sea menor que el resultsForPage de usuarios se mostrarán mas páginas
    if (page < data.length - resultsForPage) setPage(page + resultsForPage);
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
          { data ? (
            pageData().map((data, i) => (
              <tr key={i}>
                {baseFiels.map((f, i) => (
                  <td key={i}>{data[f]}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={heads.length}>No se encontraron resultados</td>
            </tr>
          )}
        </tbody>
      </table>
      {showControls && data  ? (
        <TableControl
          totalData={totalData}
          resultsForPage={resultsForPage}
          handleSelect={handleSelect}
          countPage={countPage}
          data={data}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      ) : null}
    </>
  );
};
export default Table;
