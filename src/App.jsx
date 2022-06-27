import "./App.css";
import "antd/dist/antd.css";
import MyButton from "./components/MyButton";
import MyInput from "./components/MyInput";
import SelectComp from "./components/SelectComp";

function App() {
  return (
    <div className="App">
      <h1>hello </h1>
      <MyButton />
      <MyInput />
      <SelectComp />
    </div>
  );
}

export default App;
