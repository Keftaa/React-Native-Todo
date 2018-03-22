import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import TodoList from './components/TodoList';
import { DrawerNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store/store';
import { Dimensions, StatusBar, View } from 'react-native';
import Drawer from './components/Drawer';


export const Navigator = new DrawerNavigator({
  TodoList: { screen: TodoList },
  TodoLis2: { screen: TodoList }
},{
  initialRouteName: 'TodoList',
  contentComponent: Drawer
})

class Nav extends Component {
  render() {
    return (
      <Navigator />
    )
  }
}

export default Nav;

export function getWidth(){
  return Dimensions.get('window').width;
}

export function getHeight(){
  return Dimensions.get('window').height;
}
