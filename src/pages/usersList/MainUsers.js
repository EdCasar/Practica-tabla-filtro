import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import getUsers from '../../services/getUsers';
import Table from '../../components/table/Table';
import MainSearch from '../../components/search/MainSearch';
import SearchForFields from '../../components/search/SearchForFields';
import MainTitle from '../../components/titles/MainTitle';
import useSearch from '../../hooks/useSearch';

const MainUsers = () => {
  const [data, setData] = useState();
  const [ results, search, setSearchInAllHook, setSearchInFieldsHook, ] = useSearch(data); 
  useEffect(() => {
    getUsers().then(user => setData(user)); 
  }, []);

  const searchInAll = word => {
    setSearchInAllHook(word);
  };
  //filtrando por campos
  const searchInFields = (word, key) => {
    setSearchInFieldsHook(word, key);
  };
  return (
    <>
	  <Link className="links" to="/calculadora">Ir a calculadora</Link>
	  <MainTitle title="Registro de usuarios" />
      <MainSearch searchInAll={searchInAll} />
      <section className="mainAllInputs">
        {/*el searchFor debe ser igual a los valores contenidos en el objeto a buscar,  el inputType si no se especifica será de tipo text por defecto*/}

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
        data={search.length < 1 ? data : results}
        change={search.length > 0 ? results : null}
        heads={['ID', 'Nombre', 'Usuario', 'Correo', 'Teléfono']}
        baseFiels = {['id', 'name', 'username', 'email', 'phone']}
        showControls={true}
      />
    </>
  );
};
export default MainUsers;
