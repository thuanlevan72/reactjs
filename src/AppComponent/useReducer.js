import React, { useReducer, useRef, useContext } from "react";
import { ThemeContext } from "../App"; // đưa nó vào 1  trong những
import logger from "../Hepler/logger";
// import { SET_JOD, ADD_JOD, DLE_JOD } from "./Constan";
import { setJod, addJod, dleJod } from "../Hepler/action";
import RenderSateTodo, { initialState } from "../Hepler/reducer";
// init value
// const initialState = {count: 0};

export default function Counter() {
  const theme = useContext(ThemeContext);
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(logger(RenderSateTodo), initialState);
  const inputRes = useRef();
  const addJods = () => {
    dispatch(addJod(state.jod));
    inputRes.current.focus();
    dispatch(setJod(""));
  };
  const DelJos = (index) => {
    dispatch(dleJod(index));
  };
  return (
    <>
      <div class="form-group">
        <label for="">Thêm mới công việc cần làm {theme}</label>
        <input
          ref={inputRes}
          style={{ width: "450px" }}
          type="text"
          class="form-control"
          value={state.jod}
          aria-describedby="helpId"
          placeholder=""
          onChange={(e) => {
            dispatch(setJod(e.target.value));
          }}
        />
      </div>
      <button
        style={{ width: "450px" }}
        type="button"
        name=""
        disabled={!state.jod}
        id=""
        class="btn btn-primary btn-lg btn-block"
        onClick={addJods}
      >
        Thêm mới công việc
      </button>
      <br />
      <div>
        <ul>
          {state.jods.map((item, index) => (
            <li key={index}>
              {item} <span onClick={() => DelJos(index)}>&times;</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Count: {state.count}
      <button onClick={() => dispatch(GIAM)}>-</button>
      <button onClick={() => dispatch(TANG)}>+</button> */}
    </>
  );
}
