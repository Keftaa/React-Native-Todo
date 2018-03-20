import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right,
Body, Icon, Text, List, ListItem, Input } from 'native-base';
import Database from '../Database';
import { FlatList, ListView, ScrollView, TouchableHighlight, Alert, View, KeyboardAvoidingView, StatusBar, Keyboard } from 'react-native';
import {fetchTasksAction, createTaskAction, deleteSelectedTasksAction, } from '../actions/taskActions';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Expo from 'expo';
import { getWidth, getHeight } from '../App';
import TaskItem from './TaskItem';

class TodoList extends Component {
  static navigationOptions = { title: 'Welcome', header: null };
  constructor(props) {
    super(props);
    this.state = {loading: true, taskText: ''};
    this.saveTask = this.saveTask.bind(this);
    this.deleteSelectedTasks = this.deleteSelectedTasks.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount() {
    Alert.alert("مرحبا",
    "هذا التطبيق هو أجدد تطبيق قامت دولة عدنانستان بتصميمه على الإطلاق. إنّه تطيق تودو الجديد كلّياً. ينبع تصميم و محتوى هذا التطبيق السّلس و العصري من خبرة تفوق الثلاثة أيّام. \n\nاستمتع!");
     this.props.dispatch(fetchTasksAction());
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState(previousState => {
      return { loading: false, taskText: previousState.taskText };
    });
  }
  saveTask(){
    var taskText = this.state.taskText;
    if(taskText == ''){
      Alert.alert('Task Text Empty', 'إنّ النصّ فارغٌ يا ولدي');
      return;
    }
    this.props.dispatch(createTaskAction(taskText));
    this.setState({taskText: ''});
    this.taskTextInput.setNativeProps({text: ''});
    //console.log(this.todoList._root);
    this.scrollToBottom();
  //  this.todoList._root.setNativeProps({inverted: true});
  }
  scrollToBottom(animated = true) {
    if (this.todoList._root.listHeight && this.todoList._root.footerY && this.todoList._root.footerY > this.todoList._root.listHeight) {
      // Calculates the y scroll position inside the ListView
      const scrollTo = this.footerY - this.listHeight

      // Scroll that sucker!
      this.todoList._root.scrollTo({
        y: scrollTo,
        animated: animated,
      })
    }
  }
  deleteSelectedTasks(){
    this.props.dispatch(deleteSelectedTasksAction(this.props.selectedTasks));
  //  Alert.alert("You are about to delete "+this.props.selectedTasks.length+" tasks");
  }

  render() {
    const height = getHeight();
    if(this.state.loading){
      return <Expo.AppLoading />;
    }
    var deleteButton;
    if(this.props.selectedTasks.length>0){
      deleteButton =
      <Button onPress={this.deleteSelectedTasks} iconLeft transparent>
        <Icon name='trash' />
      </Button>;
    }
    return (
      <Container>
            <StatusBar hidden={true} />
        <Header>
          <Body>
            <Title>Todo</Title>
          </Body>
          <Right>
            {deleteButton}
          </Right>
        </Header>

        <KeyboardAvoidingView behavior="padding" style={{flex: 1, flexDirection: 'column'}}>
        <List style={{flex: 1}}
            ref={(el) => {this.todoList = el}}
            dataArray={this.props.tasks}
            renderRow={(data) =>
              <TaskItem task={data} />
              }
        >
        </List>
        <View style={{flexDirection: 'row'}}>
          <Input style={{flex: 1}}
          ref= {(el) => { this.taskTextInput = el; }}
           onChangeText={(value) => this.setState({taskText: value})}
           placeholder='Task Text'/>
           <Button style={{width: 70}} onPress={this.saveTask} primary><Text>Save</Text></Button>
        </View>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = function(state){
  return {tasks: state.taskList.tasks, selectedTasks: state.taskList.selectedTasks}
}

export default connect(mapStateToProps)(TodoList);
