import * as React from 'react';
import { StyleSheet,View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import Task from '../components/task';

export default function todoList() {
  return (
    <View style={styles.container}>

      <View style={styles.tasksWapper}> 
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {/* tukaj bodo noti */}
          <Task text={'Pojdi po mleko'}/>
          <Task text={'Sprehodi psa'}/>
          <Task text={'Poji tect'}/>
        </View>
        <KeyboardAvoidingView behavior={Platform.OS === "ios"?"padding":"height"} style={styles.CreateTaskWrapper}></KeyboardAvoidingView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#F3F4F7',
    // justifyContent: 'top',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tasksWapper: {
    paddingTop : 10,
    paddingHorizontal: 20
  },
  items: {
    marginTop :20
  },
  CreateTask: {

  }
});
