import "./styles.css";
import Counter from "./Counter";
import useDebounce from "./useDebounce";
import useFetch from "./useFetch";
import Live from "./Live";
export default function App() {
  const { data, loading, error } = useFetch({
    api: "https://fakestoreapi.com/products/",
  });
  // console.log(dsata);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Counter />
      {/* {data.map((e, index) => (
        <li> {e.title} </li>
      ))} */}
      <Live />
    </div>
  );
}
