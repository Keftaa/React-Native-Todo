export function fetchTasksAction(){
  console.log('Action: fetch tasks');
  return (
    {
      type: 'FETCH_TASKS'
    }
  )
}

export function fetchTasksSuccessAction(tasks){
  console.log('Action: fetch tasks success');
  return (
    {
      type: 'FETCH_TASKS_SUCCESS',
      tasks: tasks
    }
  )
}

export function fetchTasksFailAction(errorMessage){
  console.log('Action: fetch fail', errorMessage);
  return (
    {
      type: 'FETCH_TASKS_FAIL',
      errorMessage: errorMessage
    }
  )
}

export function createTaskAction(text){
  console.log('Action: create task');
  return (
    {
      type: 'CREATE_TASK',
      text: text
    }
  )
}

export function createTaskSuccessAction(task){
  console.log('Action: create task success');
  return (
    {
      type: 'CREATE_TASK_SUCCESS',
      task: task
    }
  )
}

export function createTaskFailAction(errorMessage){
  console.log('Action: create fail');
  return (
    {
      type: 'CREATE_TASK_FAIL',
      errorMessage: errorMessage
    }
  )
}

export function selectTaskAction(task){
  console.log('Action: select task');
  return (
    {
      type: 'SELECT_TASK',
      task: task
    }
  )
}

export function deselectTaskAction(task){
  console.log('Action: deselect task');
  return (
    {
      type: 'DESELECT_TASK',
      task: task
    }
  )
}

export function deleteSelectedTasksAction(selectedTasks){
  console.log('Action: delete selected tasks');
  return (
    {
      type: 'DELETE_SELECTED_TASKS',
      selectedTasks: selectedTasks
    }
  )
}


export function deleteSelectedTasksSuccessAction(deletedTasks){
  console.log('Action: delete selected tasks success');
  return (
    {
      type: 'DELETE_SELECTED_TASKS_SUCCESS',
      deletedTasks: deletedTasks
    }
  )
}

export function deleteSelectedTasksFailAction(errorMessage){
  console.log('Action: delete selected tasks fail');
  return (
    {
      type: 'DELETE_SELECTED_TASKS_FAIL',
      errorMessage: errorMessage
    }
  )
}
