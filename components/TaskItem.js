import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right,
Body, Icon, Text, List, ListItem, Input } from 'native-base';
import Database from '../Database';
import { FlatList, ListView, ScrollView, TouchableHighlight, Alert, View, KeyboardAvoidingView, StyleSheet } from 'react-native';
import {fetchTasksAction, createTaskAction, selectTaskAction, deselectTaskAction} from '../actions/taskActions';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Expo from 'expo';
import { getWidth, getHeight } from '../App';

class TaskItem extends Component {
  static navigationOptions = { title: '', header: null };
  constructor(props) {
    super(props);
    this.selectTask = this.selectTask.bind(this);
    this.deselectTask = this.deselectTask.bind(this);
  }

  componentDidMount() {
  }

  async componentWillMount() {
  }


  selectTask(){
    this.props.dispatch(selectTaskAction(this.props.task));
    this.forceUpdate();
  }

  deselectTask(){
    this.props.dispatch(deselectTaskAction(this.props.task));
    this.forceUpdate();
  }

  render() {
    return (
        <ListItem onLongPress={this.selectTask}
          onPress={this.props.areTasksSelected
            &&!this.props.selected
            ?this.selectTask
            :this.deselectTask}
        style={this.props.selected?styles.selectedListItem:styles.listItem} key={this.props.task.id}>
            <Text>{this.props.task.text}</Text>
        </ListItem>
    );
  }

}
const mapStateToProps = function(state, ownProps){
  if(typeof state.taskList.selectedTasks == 'undefined') return state;
  if(typeof state.taskList.task != 'undefined'){
    if(ownProps.task == state.taskList.task){
      return {selected: state.taskList.selectedTasks.includes(ownProps.task),
              areTasksSelected: state.taskList.selectedTasks.length>0,
              task: state.taskList.task}
    }
  }
  return {selected: state.taskList.selectedTasks.includes(ownProps.task),
          areTasksSelected: state.taskList.selectedTasks.length>0}
}

const styles = StyleSheet.create({
  listItem: {
  },
  selectedListItem: {
    backgroundColor: '#d3d3d3',
    marginLeft: 0,
    paddingLeft: 20
  },
  activeTitle: {
    color: 'red',
  },
});

export default connect(mapStateToProps)(TaskItem);
