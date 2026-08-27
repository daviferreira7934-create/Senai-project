import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface ButtonProps{
    title: string;
    navigation: any;
    tela: string;
    style: object;
    text4: object;
}

export default function BotaoPrimario(
    {
        title, 
        navigation, 
        tela,
        style,
        text4
    } : ButtonProps
) {
  return (
    <TouchableOpacity
        onPress={()=> navigation.replace(tela)}
        style={style}
    >
       <Text style={text4}>
            {title}
       </Text>
    </TouchableOpacity>
  )
}