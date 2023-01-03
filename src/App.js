import "../src/style.css";
import { useState } from "react";
function App() {
  const [text, setText] = useState("");
  const onChangeHandler = (e) => {
    setText(e.target.value.toUpperCase());
    console.log(text);
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    document.getElementsByClassName("input")[0].value = text;
  };
  return (
    <div className="container">
      <form>
        <input
          type="text"
          className="input"
          onChange={onChangeHandler}
          name="name"
          placeholder="Please type here"
        />
        <input
          className="btn"
          type="submit"
          onClick={onClickHandler}
          value="Submit"
        />
      </form>
    </div>
  );
}
export default App;
