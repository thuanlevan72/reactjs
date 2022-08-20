import { SET_JOD, ADD_JOD, DLE_JOD } from "./Constan";
export const initialState = {
  jod: "",
  jods: [],
};

export default function RenderSateTodo(state, action) {
  let newState;
  switch (action.type) {
    case SET_JOD:
      newState = {
        ...state,
        jod: action.val,
      };
      break;
    case ADD_JOD:
      newState = {
        ...state,
        jods: [...state.jods, action.val],
      };
      break;
    case DLE_JOD:
      let newJods = state.jods.splice(action.val, 1);
      newState = {
        ...state,
        jods: newJods,
      };
      break;
    default:
      throw new Error("không tồn tại case chức năng đó");
  }
  // console.log(newState);
  return newState;
}
