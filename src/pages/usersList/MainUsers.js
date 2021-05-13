import {useState, useEffect} from 'react';
import getUsers from '../../services/getUsers';
import Table from '../../components/table/Table';
import MainSearch from '../../components/search/MainSearch';
import SearchForFields from '../../components/search/SearchForFields';

const MainUsers = () => {
  const [users, setUsers] = useState();
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    getUsers().then(user => setUsers(user));
  }, []);

  //Filtrando en todos los campos
  const searchInAll = word => {
    setSearch(word);
    if (word) {
      const searchUser = users.filter(user => {
        return Object.values(user)
          .join(' ')
          .toLowerCase()
          .includes(word.toLowerCase());
      });
      setResults(searchUser);
    } else {
      setResults(users);
    }
  };
  //filtrando por campos
  const searchInFields = (word, key) => {
    setSearch(word);
    if (word) {
      const searchForFields = users.filter(data => {
        //si la key es de tipo número lo convertimos a string
        if (key === 'id') {
          return data.[key].toString().includes(word.toLowerCase());
        } else {
          return data.[key].toLowerCase().includes(word.toLowerCase());
        }
      });
      setResults(searchForFields);
    } else {
      setResults(users);
    }
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
        users={search.length < 1 ? users : results}
        change={search.length > 0 ? results : null}
	    heads={["ID", "Nombre", "Usuario", "Correo", "Teléfono"]}
	    showControls={true}
      />
    </>
  );
};
export default MainUsers;
