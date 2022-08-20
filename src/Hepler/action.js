import { SET_JOD, ADD_JOD, DLE_JOD } from "./Constan";
export const setJod = (val) => {
  return {
    type: SET_JOD,
    val,
  };
};
export const addJod = (val) => {
  return {
    type: ADD_JOD,
    val,
  };
};
export const dleJod = (val) => {
  return {
    type: DLE_JOD,
    val,
  };
};
