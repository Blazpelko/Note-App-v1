import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';
import { back } from 'react-native/Libraries/Animated/Easing';

const Task = (props) =>{
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );

}
const styles = StyleSheet.create({
    item: {
        backgroundColor:"#FFF",
        padding : 15,
        borderRadius : 10,
        flexDirection :'row',
        alignItems :'center',
        justifyContent :'space-between',
        marginBottom :10
    },
    itemLeft: {
        flexDirection :'row',
        alignItems :'center',
        flexWrap :'wrap'
    },
    square: {
        width: 24,
        height :24,
        backgroundColor : '#55BCF6',
        opacity : 0.4,
        borderRadius : 5,
        marginRight : 3
    },
    text: {
        maxWidth : '80%'
    },
    circular: {
        width: 15,
        height :15,
        backgroundColor : '#c83349',
        opacity : 0.4,
        borderRadius : 15,
    },
  });


export default Task;