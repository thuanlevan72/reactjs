import React, { useState, createContext } from "react";
// import UseStates from './components/UseState'
import "./App.css";
// import GitCode from './AppComponent/GitCode'
// import FormComponent from './AppComponent/FormComponent'
// import TodoList from './AppComponent/TodoList'CountDownAppCountDownApp
// import CallApi from './AppComponent/CallApi'
// import CountDownApp from './AppComponent/CountDownApp'
// import ShowSelectedImage from './AppComponent/ShowSelectedImage';

import UseReducer from "./AppComponent/useReducer";
export const ThemeContext = createContext();
export default function App() {
  const [hideAndShow, setHideAndShow] = useState(false);
  const [context, setContext] = useState("black");
  return (
    <ThemeContext.Provider value={context}>
      <div className="App">
        <button
          type="button"
          name=""
          id=""
          onClick={() => setHideAndShow((before) => !before)}
          class="btn btn-primary btn-lg btn-block"
          style={{ width: "20%", margin: "10px 40%" }}
        >
          toggle
        </button>

        <div className="App-header">{hideAndShow && <UseReducer />}</div>
        {/* <UseStates /> */}
      </div>
    </ThemeContext.Provider>
  );
}
