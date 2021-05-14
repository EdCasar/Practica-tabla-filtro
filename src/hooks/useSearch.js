import {useEffect, useState} from 'react';
// import getUsers from '../services/getUsers';

const useSearch = users => {
  const [dataIn, setDataIn] = useState();
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    setDataIn(users);
  }, [users]);

  //Filtrando en todos los campos
  const setSearchInAllHook = word => {
    setSearch(word);
    if (word) {
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
  const setSearchInFiledsHook = (word, key) => {
    setSearch(word);
    if (word) {
      const searchForFields = dataIn.filter(data => {
        //si la key es de tipo número lo convertimos a string
        if (key === 'id') {
          return data.[key].toString().includes(word.toLowerCase());
        } else {
          return data.[key].toLowerCase().includes(word.toLowerCase());
        }
      });
      setResults(searchForFields);
    } else {
      setResults(dataIn);
    }
  };
  return [dataIn, results, search, setSearchInAllHook, setSearchInFiledsHook];
};
export default useSearch;
