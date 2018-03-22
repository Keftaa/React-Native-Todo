import React, { Component } from 'react';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { StyleSheet, ScrollView, Text } from 'react-native';

export default class Drawer extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <ScrollView>
        <Text>Hello, User</Text>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
          <DrawerItems
            getLabel = {(scene) => (
              <View>
                <Text style={styles.drawerItem}>hala bl khamees</Text>
              </View>
            )}
          {...this.props} />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerItem: {
    backgroundColor: 'red'
  }
});
