import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../style/DashboardStyle'

interface AtendimentoItemProps {
  title: string;
  schedule: string;
  badgeLabel: string;
  badgeBg: string;
  badgeColor: string;
}

export default function AtendimentoItem({ title, schedule, badgeLabel, badgeBg, badgeColor }: AtendimentoItemProps) {
  return (
    <View style={styles.listRow}>
      <View style={styles.listRowLeft}>
        <View style={styles.bulletDot} />
        <View>
          <Text style={styles.itemTitle}>{title}</Text>
          <Text style={styles.itemSubtitle}>{schedule}</Text>
        </View>
      </View>

      <View style={[styles.badge, { backgroundColor: badgeBg }]}>
        <Text style={[styles.badgeText, { color: badgeColor }]}>{badgeLabel}</Text>
      </View>
    </View>
  )
}
