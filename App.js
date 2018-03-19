import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import TodoList from './components/TodoList';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import store from './store/store';
import { Dimensions } from 'react-native';

const App = () => (

  <Provider store={store}>
    <Router>
      <Stack key="root">
        <Scene key="home" component={TodoList} initial/>
      </Stack>
    </Router>
  </Provider>
);

export default App;

export function getWidth(){
  return Dimensions.get('window').width;
}

export function getHeight(){
  return Dimensions.get('window').height;
}
