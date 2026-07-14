import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import DashboardScreen from '../screen/DashboardScreen'
import LoginScreen from "../screen/LoginScreen"
import React from 'react'
import ChatScreen from '../screen/ChatScreen';




const Stack = createNativeStackNavigator();

export default function Approutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />

      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
      />

      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
      />
      </Stack.Navigator>
    </NavigationContainer>
  )
}