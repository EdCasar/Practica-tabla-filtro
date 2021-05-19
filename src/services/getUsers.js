
const getUsers = () => {
  return fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(response => {
      const data = response ;
      return data;
    });
};
export default getUsers;
