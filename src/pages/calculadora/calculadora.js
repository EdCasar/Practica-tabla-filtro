import {useState, useEffect, useRef} from 'react';

const Calculadora = ({changeEffect}) => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [operacion, setOperacion] = useState('sumar');
  const [resultado, setSuccess] = useState();

  const handleInput = e => setNum1(parseInt(e.target.value));
  const handleInput2 = e => setNum2(parseInt(e.target.value));
  const handleSelect = e => setOperacion(e.target.value);
  const form = useRef();

  useEffect(() => {
    if (resultado) {
      localStorage.setItem(
        Math.random(),
        JSON.stringify({num1, num2, operacion, resultado}),
      );
      changeEffect(resultado);
    }
  }, [resultado]);

  const calcular = (a, b) => {
    switch (operacion) {
      case 'sumar':
        return setSuccess(num1 + num2);
      case 'restar':
        return setSuccess(num1 - num2);
      case 'multiplicar':
        return setSuccess(num1 * num2);
      case 'dividir':
        return setSuccess(num1 / num2);
      default:
        return null;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    calcular();
  };
  return (
    <>
      <form className="calculadora" onSubmit={handleSubmit} ref={form}>
        <input type="number" onChange={handleInput} placeholder="Número" />
        <input type="number" onChange={handleInput2} placeholder="Número" />
	    <label htmlFor="select">Operación a realizar</label>
        <select id="select" onChange={handleSelect} value={operacion}>
          <option value="sumar">Sumar</option>
          <option value="restar">Restar</option>
          <option value="multiplicar">Multipicar</option>
          <option value="dividir">Dividir</option>
        </select>
        <button>Calcular</button>
      </form>
    </>
  );
};

export default Calculadora;
