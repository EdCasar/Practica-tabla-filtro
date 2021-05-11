import {useState} from 'react';
const total = 5;
const BodyTable = ({users, search}) => {
  const [page, setPage] = useState(0);

  const pageUsers = () => {
    if (users) return users.slice(page, page + total);
  };
  const nextPage = () => {
    if (page <= users.length) setPage(page + total);
  };
  const prevPage = () => {
    if (page > 0) setPage(page - total);
  };

  return (
    <tbody>
      {pageUsers() ? (
        pageUsers().map(({id, name, username, email, phone}) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{phone}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="5">Sin datos</td>
        </tr>
      )}
      <tr className="footerTable">
        <td className="text-left" onClick={prevPage}>
          Anterior
        </td>
        <td className="text-center" colSpan="3">
          <b>Total Registros: </b> {users ? users.length : null}{' '}
        </td>
        <td className="text-right" onClick={nextPage}>
          siguiente
        </td>
      </tr>
    </tbody>
  );
};
export default BodyTable;
