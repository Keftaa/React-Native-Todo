import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right,
Body, Icon, Text, List, ListItem, Input } from 'native-base';
import Database from '../Database';
import { FlatList, ListView, ScrollView, TouchableHighlight, Alert, View, KeyboardAvoidingView } from 'react-native';
import {fetchTasksAction, createTaskAction} from '../actions/taskActions';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Expo from 'expo';
import { getWidth, getHeight } from '../App';

class TodoList extends Component {
  static navigationOptions = { title: 'Welcome', header: null };
  constructor(props) {
    super(props);
    this.state = {loading: true, taskText: ''};
    this.saveTask = this.saveTask.bind(this);
  }

  componentDidMount() {
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
    this.props.dispatch(createTaskAction(taskText));
  }

  render() {
    const height = getHeight();
    if(this.state.loading){
      return <Expo.AppLoading />;
    }
    return (

      <Container>
        <Header />

        <KeyboardAvoidingView behavior="padding" style={{flex: 1, flexDirection: 'column'}}>
        <List style={{flex: 1}}
            dataArray={this.props.tasks}
            renderRow={(data) =>
              <ListItem>
                <Text>{data.text}</Text>
              </ListItem>
              }
        >
        </List>

        <View style={{flexDirection: 'row'}}>
          <Input style={{flex: 1}}
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
    return {tasks: state.taskList.tasks}
}

export default connect(mapStateToProps)(TodoList);
