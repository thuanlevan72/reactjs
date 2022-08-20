const logger = (RenderSateTodo) => {
  return (state, action) => {
    console.group(action.type);
    console.log("prevState", state);
    console.log("action: ", action);
    const newState = RenderSateTodo(state, action);
    console.log("prevState", newState);
    console.groupEnd();
    return newState;
  };
};

export default logger;
