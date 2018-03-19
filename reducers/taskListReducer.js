const initialState = {
  tasks: [],
  lastErrorMessage: "",
}
const taskListReducer = function(state = initialState, action) {
  switch(action.type){
    case "FETCH_TASKS":
      return {
        tasks: []
      }
    case "FETCH_TASKS_SUCCESS":
      return {
        tasks: action.tasks
      }
    case "FETCH_TASKS_FAIL":
      return {
        lastErrorMessage: action.errorMessage
      }
    default:
      return state;
  }
}

export default taskListReducer;
