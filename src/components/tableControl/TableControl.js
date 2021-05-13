const TableControl = ({totalData, countPage, users, resultsForPage, handleSelect, prevPage, nextPage}) => {
  return (
    <section className="tableControl">
      <div className="next-prev prev" onClick={prevPage}>
        <p>Anterior</p>
      </div>
      <div className="itemControl">
        <p>{totalData ? `Pagina ${countPage} de ${totalData}` : null}</p>
      </div>
      <div className="itemSelect">
        <p>Ver por página:</p>
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
      </div>
      <div className="itemControl">
        <p>
          <b>Total registros: </b> {users ? users.length : 0}{' '}
        </p>
      </div>
      <div className="next-prev next" onClick={nextPage}>
        <p>Siguiente</p>
      </div>
    </section>
  );
};
export default TableControl;
