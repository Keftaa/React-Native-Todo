const initialState = {
  tasks: [],
  lastErrorMessage: "",
  selectedTasks: []
}
const taskListReducer = function(state = initialState, action) {
  switch(action.type){
    case "FETCH_TASKS":
      return {
        tasks: [],
        selectedTasks: state.selectedTasks
      }
    case "FETCH_TASKS_SUCCESS":
      return {
        tasks: action.tasks,
        selectedTasks: state.selectedTasks
      }
    case "FETCH_TASKS_FAIL":
      return {
        tasks: [],
        lastErrorMessage: action.errorMessage,
        selectedTasks: state.selectedTasks
      }
    case "SELECT_TASK":
      return {
        tasks: state.tasks,
        selectedTasks:
          !state.selectedTasks.includes(action.task)?
            state.selectedTasks.concat(action.task):
            state.selectedTasks
      }
    case "DESELECT_TASK":
      return {
        tasks: state.tasks,
        selectedTasks: state.selectedTasks.filter(a => a !== action.task) 
      }
    case "DELETE_SELECTED_TASKS":
    console.log(action.selectedTasks);
      return {
        selectedTasks: action.selectedTasks,
        tasks: state.tasks
      }
    case "DELETE_SELECTED_TASKS_SUCCESS":
      return {
        selectedTasks: [],
        tasks: state.tasks
      }
    case "DELETE_SELECTED_TASKS_FAIL":
      return {
        lastErrorMessage: action.errorMessage,
      }
    default:
      return state;
  }
}

export default taskListReducer;
