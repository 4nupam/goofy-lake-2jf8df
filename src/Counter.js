import { useState } from "react";
export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [list, setList] = useState([]);
  const inc = () => {
    setCounter((prev) => prev + 1);
    setList((prev) => [...prev, counter]);
  };
  const dec = () => {
    setCounter((prev) => prev - 1);
    setList((prev) => [...prev, counter]);
  };
  return (
    <div>
      <button onClick={inc}>Increase</button>
      {counter}
      <button onClick={dec}>Decrease</button>
      <br />
      {list.length > 0 && list.map((e, index) => <li key={index}> {e} </li>)}
    </div>
  );
}
