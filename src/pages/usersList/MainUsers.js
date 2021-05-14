import {useState, useEffect} from 'react';
import getUsers from '../../services/getUsers';
import Table from '../../components/table/Table';
import MainSearch from '../../components/search/MainSearch';
import SearchForFields from '../../components/search/SearchForFields';
import useSearch from '../../hooks/useSearch';

const MainUsers = () => {
  const [users, setUsers] = useState();
  //  const [search, setSearch] = useState('');
  //  const [results, setResults] = useState([]);
  const [
    dataIn,
    results,
    search,
    setSearchInAllHook,
    setSearchInFiledsHook,
  ] = useSearch(users);

  useEffect(() => {
    getUsers().then(user => setUsers(user));
  }, []);

  const searchInAll = word => {
    setSearchInAllHook(word);
  };
  //filtrando por campos
  const searchInFields = (word, key) => {
    setSearchInFiledsHook(word, key);
  };
  return (
    <>
      <h1>Lista de usuarios</h1>
      <MainSearch searchInAll={searchInAll} />
      <section className="mainAllInputs">
        {/*el searchFor debe ser igual a los valores contenidos en el objeto a buscar*/}

        <SearchForFields
          searchInFields={searchInFields}
          searchFor={'id'}
	     
          name="ID"
        />
        <SearchForFields
          searchInFields={searchInFields}
          searchFor={'name'}
          name="nombre"
        />
        <SearchForFields
          searchInFields={searchInFields}
          searchFor={'username'}
          name="usuario"
        />
        <SearchForFields
          searchInFields={searchInFields}
          searchFor={'email'}
          name="correo"
        />
        <SearchForFields
          searchInFields={searchInFields}
          searchFor={'phone'}
          name="teléfono"
        />
      </section>
      <Table
        users={search.length < 1 ? dataIn : results}
        change={search.length > 0 ? results : null}
        heads={['ID', 'Nombre', 'Usuario', 'Correo', 'Teléfono']}
        showControls={true}
      />
    </>
  );
};
export default MainUsers;
