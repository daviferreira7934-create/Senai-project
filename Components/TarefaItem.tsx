import { View, Text, TouchableOpacity } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import { styles } from '../style/DashboardStyle'

interface TarefaItemProps {
  title: string;
  subtitle: string;
  badgeLabel: string;
  badgeBg: string;
  badgeColor: string;
  done?: boolean;
  onToggle?: () => void;
}

export default function TarefaItem({ title, subtitle, badgeLabel, badgeBg, badgeColor, done, onToggle }: TarefaItemProps) {
  return (
    <View style={styles.listRow}>
      <View style={styles.listRowLeft}>
        <TouchableOpacity
          onPress={onToggle}
          style={[styles.checkbox, done && styles.checkboxDone]}
        >
          {done && <Feather name="check" size={12} color="white" />}
        </TouchableOpacity>
        <View>
          <Text style={[styles.itemTitle, done && styles.itemTitleDone]}>{title}</Text>
          <Text style={styles.itemSubtitle}>{subtitle}</Text>
        </View>
      </View>

      <View style={[styles.badge, { backgroundColor: badgeBg }]}>
        <Text style={[styles.badgeText, { color: badgeColor }]}>{badgeLabel}</Text>
      </View>
    </View>
  )
}
