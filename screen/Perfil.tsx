import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Perfil({navigation}: any) {
  return (
    <View>
      <Text>Perfil</Text>

    <Button
        title='Home'
        onPress={()=>navigation.navigate("Home")}
    />
    </View>
  )
}