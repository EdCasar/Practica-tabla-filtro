const SearchForFields = ({searchInFields, searchFor, name, inputType}) => {
  const getSearch = e => {
    searchInFields(e.target.value, e.target.name);
  };
  const blurInput = e => {
    e.target.value = '';
    searchInFields(e.target.value, e.target.name);
  };
  return (
    <div className="inputFields">
      <input
        type={inputType ? inputType : 'text'}
        name={searchFor}
        onChange={getSearch}
        onBlur={blurInput}
        placeholder={`Buscar por ${name}`}
      />
    </div>
  );
};
export default SearchForFields;
