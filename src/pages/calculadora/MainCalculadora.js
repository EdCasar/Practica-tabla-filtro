import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Table from '../../components/table/Table';
import MainSearch from '../../components/search/MainSearch';
import SearchForFields from '../../components/search/SearchForFields';
import MainTitle from '../../components/titles/MainTitle';
import useSearch from '../../hooks/useSearch';
import Calculadora from './calculadora';

const MainCalculadora = () => {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState();
  const [
    results,
    search,
    setSearchInAllHook,
    setSearchInFieldsHook,
  ] = useSearch(data);

  useEffect(() => {
    setData([]); //resetamos el array para que no se duplique
    const keys = Object.keys(localStorage);
    keys.forEach(clave => {
      if (clave !== 'lastKeyword' && clave !== 'debug') {
        const newData = localStorage.getItem(clave);
        setData(dat => [...dat, JSON.parse(newData)]);
      }
    });
  }, [update]);

  const searchInAll = word => {
    setSearchInAllHook(word);
  };
  //filtrando por campos
  const searchInFields = (word, key) => {
    setSearchInFieldsHook(word, key);
  };
  const changeEffect = res => {
    setUpdate(res);
    console.log(res);
  };
  return (
    <>
      <Link className="links" to="/">Ir a registro de usuarios </Link>
      <MainTitle title="Calculadora" />
      <Calculadora changeEffect={changeEffect} />
      <MainSearch searchInAll={searchInAll} />
      <section className="mainAllInputs">
        {/*el searchFor debe ser igual a los valores contenidos en el objeto a buscar,  el inputType si no se especifica será de tipo text por defecto*/}

        <SearchForFields
          searchInFields={searchInFields}
          searchFor={'num1'}
          name="num1"
        />
        <SearchForFields
          searchInFields={searchInFields}
          searchFor={'num2'}
          name="num2"
        />
        <SearchForFields
          searchInFields={searchInFields}
          searchFor={'operacion'}
          name="operacion"
        />
        <SearchForFields
          searchInFields={searchInFields}
          searchFor={'resultado'}
          name="operacion"
        />
      </section>
      <Table
        data={search.length < 1 ? data : results}
        change={search.length > 0 ? results : null}
        heads={['Num1', 'Num2', 'Operacion', 'Resultado']}
        baseFiels={['num1', 'num2', 'operacion', 'resultado']}
        showControls={true}
      />
    </>
  );
};
export default MainCalculadora;
