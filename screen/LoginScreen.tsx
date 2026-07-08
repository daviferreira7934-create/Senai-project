import { View, Text, Button } from 'react-native'
import React from 'react'
import BotaoPrimario from '../Components/BotaoPrimario'

export default function DashboardScreen({navigation}:any) {
  return (
    <View>
      
      <Text>Login Screen</Text>

      <BotaoPrimario
        title='Logar'
        tela='DashboardScreen'
        navigation={navigation}
      />

    </View>
  )
}