import { call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects'
import Database from '../database';
import {Keyboard} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Database from '../Database';
import {
  fetchTasksAction, fetchTasksSuccessAction, fetchTasksFailAction,
  createTaskAction, createTaskSuccessAction, createTaskFailAction

} from '../actions/taskActions';

function* watchFetchTasks() {
  yield takeEvery("FETCH_TASKS", fetchTasksWorker);
}

function* fetchTasksWorker(action) {
   try {
      const tasks = yield call(Database.fetchTasks);
      yield put(fetchTasksSuccessAction(tasks));
   } catch (e) {
      yield put(fetchTasksFailAction(e.message));
   }
}

function* watchCreateTask(){
  yield takeEvery("CREATE_TASK", createTaskWorker);
}

function* createTaskWorker(action) {
   try {
      const task = yield call(Database.insertTask, action.taskText);
      yield put(createTaskSuccessAction(task.id));
   } catch (e) {
     yield put(createTaskFailAction(e.message));
   }
}


function* updateTaskText(action) {
  console.log('update task text saga', action.taskText);
  yield put({type: "UPDATE_TASK_TEXT_SUCCEEDED", taskText: action.taskText});
   // try {
   //    const task = yield call(saveTaskInDatabase, action.taskText);
   //    yield put({type: "SAVE_NEW_TASK_SUCCEEDED", task: actio});
   // } catch (e) {
   //    yield put({type: "SAVE_NEW_TASK_FAILED", message: e.message});
   // }
}


function* rootSaga () {
    yield [
        fork(fetchTasksSaga), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        fork(addTaskSaga),
        fork(updateTaskTextSaga)
    ];
}

export default rootSaga;
