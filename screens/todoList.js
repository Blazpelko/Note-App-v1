import React,{useState} from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform,TextInput, TouchableOpacity } from 'react-native';
import Task from '../components/task';

export default function todoList() {
  const [task,setTask]= useState();
  const [taskItems,setTaskItems] = useState([]);

  const handleNewTask = () => {
    if (task != ''){
      setTaskItems([...taskItems,task]);
      setTask('');
    }
    
  }
  return (
    <View style={styles.container}>

      <View style={styles.tasksWapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {/* tukaj bodo noti */}
          {
            taskItems.map((item)=>{
              return <Task text={item}/>
            })
          }
          {/* <Task text={'Pojdi po mleko'} />
          <Task text={'Sprehodi psa'} />
          <Task text={'Poji tect'} /> */}
        </View>
      </View>

      {/*Vnos novih taskov*/}
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.CreateTaskWrapper}>
        <TextInput style={styles.UserInput} placeholder={'Nov zapis'} value={task} onChangeText={text => setTask(text)}/>
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
    // justifyContent: 'top',
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
    position :'absolute',
    bottom : 40,
    width : '100%',
    flexDirection :'Row',
    justifyContent : 'space-around',
    alignItem : 'center'
  },
  UserInput:{
    borderRadius:10,
    backgroundColor: '#FFF',
    height :60,
    paddingVertical : 15,
    paddingHorizontal :15,
    // width :250
  },
  addTask:{
  },
  addTaskWrapper:{
    height :60,
    width :60,
    backgroundColor: '#FFF',
    borderRadius:60,
    justifyContent :'center',
    alignItems :'center'
  }
});
