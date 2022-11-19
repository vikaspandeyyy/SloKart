import React from "react";
import ReactDOM from 'react-dom'
import "./App.css";
// import Main from "./Main";
import LeftIconBar from "./left icon bar";
import RightAll from './Main Content'
// ReactDOM.render(<Main/>,document.getElementById('Right-content'))
function App() {
  return (
    <>
    <LeftIconBar/>
    <RightAll/>
    </>
  );
}
export default App;
