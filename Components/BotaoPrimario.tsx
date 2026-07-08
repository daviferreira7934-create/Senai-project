import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface ButtonProps{
    title: string;
    navigation: any;
    tela: string;
}

export default function BotaoPrimario(
    {
        title, 
        navigation, 
        tela
    } : ButtonProps
) {
  return (
    <TouchableOpacity
        onPress={()=> navigation.navigate(tela)}
    >
       <Text>
            {title}
       </Text>

    </TouchableOpacity>
  )
}