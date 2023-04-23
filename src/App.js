import "./styles.css";
import { useSelector } from "react-redux";

export default function App() {
  const data = useSelector((state) => state);
  console.log(data);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
