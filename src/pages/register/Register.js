import {useReducer, useEffect} from 'react';
const initialState = {
  name: '',
  username: '',
  password: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TEXT':
      return {
        ...state,
        [action.name]: action.payload,
      };
    default:
      return null;
  }
};
const Register = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
	}, [state])
  const handlerInput = e => {
    dispatch({
      type: 'TEXT',
      name: e.target.name,
      payload: e.target.value,
    });
  };
	const handlerSubmit = e => {
      e.preventDefault()
		console.log('datos enviados:', state)
		console.log(e.target)
		e.target.reset()
	}
  return (
    <form action="" onSubmit={handlerSubmit}className="mainRegister">
      <div className="inputFields">
        <input
          type="text"
          name="name"
          onChange={handlerInput}
          placeholder="Nombre:"
        />
      </div>
      <div className="inputFields">
        <input
          type="text"
          name="username"
          onChange={handlerInput}
          placeholder="Usuario:"
        />
      </div>
      <div className="inputFields">
        <input
          type="password"
          name="password"
          onChange={handlerInput}
          placeholder="Contraseña:"
        />
      </div>
      <button>Enviar</button>
    </form>
  );
};
export default Register;
