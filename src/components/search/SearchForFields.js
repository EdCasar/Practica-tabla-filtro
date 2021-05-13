
const SearchForFields = ({ searchInFields , searchFor, name})=> {
  const getSearch = (e) => {
    searchInFields(e.target.value, e.target.name);
  };

  return (
    <div className="inputFields">
      <input
        type="text"
	    name={searchFor}
        onChange={getSearch}
        placeholder={`Buscar por ${name}`}
      />
    </div>
  );
};
export default SearchForFields;

