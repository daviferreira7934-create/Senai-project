import { View, Text, TouchableOpacity } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import { styles, colors } from '../style/DashboardStyle'

interface SectionCardProps {
  icon: keyof typeof Feather.glyphMap;
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
  children: React.ReactNode;
}

export default function SectionCard({ icon, title, actionLabel, onActionPress, children }: SectionCardProps) {
  return (
    <View style={styles.sectionCard}>
      <View style={styles.sectionHeader}>
        <View style={styles.sectionHeaderLeft}>
          <View style={styles.sectionIconBox}>
            <Feather name={icon} size={14} color={colors.primaryText} />
          </View>
          <Text style={styles.sectionTitle}>{title}</Text>
        </View>

        {actionLabel && (
          <TouchableOpacity onPress={onActionPress}>
            <Text style={styles.sectionAction}>{actionLabel}</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.sectionBody}>
        {children}
      </View>
    </View>
  )
}
