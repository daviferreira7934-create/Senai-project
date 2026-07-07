import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screen/Home";
import Perfil from "../screen/Perfil";

const Stack = createNativeStackNavigator();


export default function Approutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={
        {headerShown: false}
      } 
     >

        <Stack.Screen
          name="Home"
          component={Home}
        />
        
        <Stack.Screen
          name="Perfil"
          component={Perfil}
        />        

      </Stack.Navigator>
    </NavigationContainer>
  )
}