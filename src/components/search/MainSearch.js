import {useRef} from 'react';

const MainSearch = props => {
  const input = useRef();
  const getSearch = () => {
    props.searchWord(input.current.value);
  };

  return (
    <div className="mainInput">
      <input
        type="text"
        ref={input}
        onChange={getSearch}
        placeholder="buscar"
        value={props.search}
      />
      <span><i className="material-icons">&#xe8b6;</i></span>
    </div>
  );
};
export default MainSearch;
