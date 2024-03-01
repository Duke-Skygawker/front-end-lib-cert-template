import "./App.css";
import { useGlobalContext } from "./Context/Context";
function App() {
  const { showContext } = useGlobalContext();
  return <>{showContext}</>;
}

export default App;
