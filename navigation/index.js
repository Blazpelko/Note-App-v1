import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import todoList from '../screens/todoList';
import snkrs from '../screens/snkrs';

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

//Koda za root navigation
const Stack = createNativeStackNavigator();
function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        </Stack.Navigator>
    );
}

//Koda za bottom navigation
const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="todoList" component={todoList}/>
            <BottomTab.Screen name="snkrs" component={snkrs} />
        </BottomTab.Navigator>
    );
}

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}
