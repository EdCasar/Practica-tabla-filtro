import HeadTable from './HeadTable';
import BodyTable from './BodyTable';
import {useState, useEffect} from 'react';
import getUsers from '../../services/getUsers';
import MainSearch from '../search/MainSearch';

const MainTable = () => {
  const [users, setUsers] = useState();
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    getUsers().then(user => setUsers(user));
  }, []);

  const searchWord = search => {
    setSearch(search);
    if (search) {
      const searchUser = users.filter(user => {
        return Object.values(user)
          .join(' ')
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setResults(searchUser);
    } else {
      setResults(users);
    }
  };
  return (
    <>
      <h1>Lista de usuarios</h1>
      <MainSearch search={search} searchWord={searchWord} />
      <table className="mainTable">
        <HeadTable />
        <BodyTable
          users={search.length < 1 ? users : results}
          search={search}
        />
      </table>
    </>
  );
};
export default MainTable;
