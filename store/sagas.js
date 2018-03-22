import { call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects'
import {Keyboard} from 'react-native';
import Database from '../Database';
import {
  fetchTasksAction, fetchTasksSuccessAction, fetchTasksFailAction,
  createTaskAction, createTaskSuccessAction, createTaskFailAction,
  deleteSelectedTasksAction, deleteSelectedTasksSuccessAction, deleteSelectedTasksFailAction

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
      const task = yield call(Database.insertTask, action.text);
      console.log(task);
      yield put(createTaskSuccessAction(task));
    //  yield put(fetchTasksAction());
   } catch (e) {
     yield put(createTaskFailAction(e.message));
   }
}

function* watchDeleteSelectedTasks(){
  yield takeEvery("DELETE_SELECTED_TASKS", deleteSelectedTasksWorker);
}

function* deleteSelectedTasksWorker(action) {
   try {
      var deletedTasks = [].concat(action.selectedTasks);
      yield call(Database.deleteTasks, action.selectedTasks);
      yield put(deleteSelectedTasksSuccessAction(deletedTasks));
      //yield put(fetchTasksAction());
   } catch (e) {
     yield put(deleteSelectedTasksFailAction(e.message));
   }
}

function* rootSaga () {
    yield [
        fork(watchFetchTasks),
        fork(watchCreateTask),
        fork(watchDeleteSelectedTasks),
    ];
}

export default rootSaga;
