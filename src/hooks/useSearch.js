import {useEffect, useState} from 'react';

const useSearch = data => {
  const [dataIn, setDataIn] = useState();
  const [search, setSearch] = useState('');
  const [results, setResults] = useState(null);
  useEffect(() => {
    setDataIn(data);
  }, [data]);

  //Filtrando en todos los campos
  const setSearchInAllHook = word => {
    setSearch(word);
    if (word && dataIn) {
      const searchUser = dataIn.filter(user => {
        return Object.values(user)
          .join(' ')
          .toLowerCase()
          .includes(word.toLowerCase());
      });
      setResults(searchUser);
    } else {
      setResults(dataIn);
    }
  };

  //Filtrando en cada campo
  const setSearchInFieldsHook = (word, key) => {
    setSearch(word);
    if (word && dataIn) {
      const searchForFields = dataIn.filter(data => {
        if (typeof data[key] === 'number') {
          //si el objeto contine datos de tipo número lo convertimos a string
          return data[key].toString().includes(word.toLowerCase());
        } else {
          return data[key].toLowerCase().includes(word.toLowerCase());
        }
      });
      setResults(searchForFields);
    } else {
      setResults(dataIn);
    }
  };
  return [results, search, setSearchInAllHook, setSearchInFieldsHook];
};
export default useSearch;
