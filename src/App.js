import { useState } from "react";
import LargeText from "./components/LargeText";
import "./styles.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  const buttonText = "Click me";
  const onClickHandler = () => {
    console.log(counter);
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <button onClick={onClickHandler}>{buttonText}</button>
      <LargeText text={`Button was clicked ${counter} times`} />
    </div>
  );
};

export default App;
