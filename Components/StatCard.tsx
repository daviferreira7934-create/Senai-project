import { View, Text } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import { styles, colors } from '../style/DashboardStyle'

interface StatCardProps {
  icon: keyof typeof Feather.glyphMap;
  value: string;
  label: string;
  footer: string;
}

export default function StatCard({ icon, value, label, footer }: StatCardProps) {
  return (
    <View style={styles.statCard}>
      <View style={styles.statTopRow}>
        <View style={styles.statIconBox}>
          <Feather name={icon} size={18} color={colors.primaryText} />
        </View>
        <View>
          <Text style={styles.statValue}>{value}</Text>
          <Text style={styles.statLabel}>{label}</Text>
        </View>
      </View>
      <Text style={styles.statFooter}>{footer}</Text>
    </View>
  )
}
