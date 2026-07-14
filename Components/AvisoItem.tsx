import { View, Text } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import { styles, colors } from '../style/DashboardStyle'

interface AvisoItemProps {
  title: string;
  description: string;
}

export default function AvisoItem({ title, description }: AvisoItemProps) {
  return (
    <View style={styles.avisoRow}>
      <Feather name="volume-2" size={16} color={colors.primaryText} />
      <View style={{ flex: 1 }}>
        <Text style={styles.avisoTitle}>{title}</Text>
        <Text style={styles.avisoDescription}>{description}</Text>
      </View>
      <Feather name="chevron-right" size={16} color={colors.subtext} />
    </View>
  )
}
