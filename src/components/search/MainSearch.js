const MainSearch = ({searchInAll}) => {
  const getSearch = e => {
    searchInAll(e.target.value);
  };
  const blurInput = e => {
    e.target.value = '';
    searchInAll(e.target.value, e.target.name);
  };

  return (
    <div className="mainInput">
      <input
        type="text"
        onChange={getSearch}
        onBlur={blurInput}
        placeholder="Buscar en todos los campos"
      />
      <span>
        <i className="material-icons">&#xe8b6;</i>
      </span>
    </div>
  );
};
export default MainSearch;
