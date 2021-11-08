import React, { useState } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity,ScrollView, Keyboard } from 'react-native';
import Task from '../components/task';

export default function todoList() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleNewTask = () => {
    if (task != '') {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask('');
    }
  }

  const completeTask = (index) => {
    let copy =[...taskItems];
    copy.splice(index,1);
    setTaskItems(copy);
  }

  return (
    <View style={styles.container}>

      <View style={styles.tasksWapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <ScrollView style={styles.items}>
          {/* tukaj bodo noti */}
          {
            taskItems.map((item, index) => {
              return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
              )  
          })
          }
        </ScrollView >
      </View>

      {/*Vnos novih taskov*/}
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}  keyboardVerticalOffset={Platform.OS === "ios" ? 95 : 0} style={styles.CreateTaskWrapper}>
        <TextInput style={styles.UserInput} placeholder={'Nov zapis'} value={task} onChangeText={text => setTask(text)} />
        {/* Gumb ki doda task */}
        <TouchableOpacity onPress={() => handleNewTask()}>
          <View style={styles.addTaskWrapper}>
            <Text style={styles.addTask}>Add</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F7',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tasksWapper: {
    paddingTop: 10,
    paddingHorizontal: 20
  },
  items: {
    marginTop: 20
  },
  CreateTaskWrapper: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  UserInput: {
    borderRadius: 10,
    backgroundColor: '#FFF',
    height: 60,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor : '#b3b3cc',
    width: 250
  },
  addTaskWrapper: {
    height: 60,
    width: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor : '#b3b3cc',
    borderWidth: 1
  }
});
