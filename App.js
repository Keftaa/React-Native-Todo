import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import TodoList from './components/TodoList';
import { DrawerNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store/store';
import { Dimensions, StatusBar, View } from 'react-native';
import Navigator from './Navigator';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

export function getWidth(){
  return Dimensions.get('window').width;
}

export function getHeight(){
  return Dimensions.get('window').height;
}
