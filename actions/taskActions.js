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

export function createTaskSuccessAction(taskId){
  console.log('Action: create task success');
  return (
    {
      type: 'CREATE_TASK_SUCCESS',
      taskId: taskId
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
