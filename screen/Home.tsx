import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Home({navigation}:any) {
  return (
    <View>
      
      <Text>home</Text>

    <Button
        title='Perfil'
        onPress={()=>navigation.navigate("Perfil")}
    />

    </View>
  )
}