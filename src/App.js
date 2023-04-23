import "./styles.css";
import { useSelector } from "react-redux";
import User from "./components/User";
import PostList from "./components/PostList";

export default function App() {
  const data = useSelector((state) => state);
  console.log(data);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <User />
      <PostList />
    </div>
  );
}
