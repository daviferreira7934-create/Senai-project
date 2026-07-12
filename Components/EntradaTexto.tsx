import { View, Text, TextInput } from 'react-native'
import EvilIcons from '@expo/vector-icons/EvilIcons';

import React from 'react'

interface TextInputProps{
    placeholder: string;
    styleInput?: object;
    styleContainer?: object;
    icon?: keyof typeof EvilIcons.glyphMap;
    colorIcon?: string;

}

export default function EntradaTexto({placeholder, styleContainer, icon, styleInput, colorIcon}: TextInputProps) {
  return (
    <View style={styleContainer}>
      <EvilIcons name={icon} size={30} color={colorIcon} />
      
      <TextInput
        placeholder={placeholder}
        style={styleInput}
      />

    </View>
  )
}