export function fetchTasksAction(){
  return (
    {
      type: 'FETCH_TASKS'
    }
  )
}

export function fetchTasksSuccessAction(tasks){
  return (
    {
      type: 'FETCH_TASKS_SUCCESS',
      tasks: tasks
    }
  )
}

export function fetchTasksFailAction(errorMessage){
  return (
    {
      type: 'FETCH_TASKS_FAIL',
      errorMessage: errorMessage
    }
  )
}

export function createTaskAction(text){
  return (
    {
      type: 'CREATE_TASK',
      text: text
    }
  )
}

export function createTaskSuccessAction(taskId){
  return (
    {
      type: 'CREATE_TASK_SUCCESS',
      taskId: taskId
    }
  )
}

export function createTaskFailAction(errorMessage){
  return (
    {
      type: 'CREATE_TASK_FAIL',
      errorMessage: errorMessage
    }
  )
}
