
const MainSearch = ({ searchInAll })=> {
  const getSearch = (e) => {
    searchInAll(e.target.value);
  };

  return (
    <div className="mainInput">
      <input
        type="text"
        onChange={getSearch}
        placeholder="Buscar en todos los campos"
      />
      <span><i className="material-icons">&#xe8b6;</i></span>
    </div>
  );
};
export default MainSearch;
