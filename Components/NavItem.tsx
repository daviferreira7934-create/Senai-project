import { Text, TouchableOpacity } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import { styles, colors } from '../style/DashboardStyle'

interface NavItemProps {
  icon: keyof typeof Feather.glyphMap;
  label: string;
  active?: boolean;
  onPress?: () => void;
}

export default function NavItem({ icon, label, active, onPress }: NavItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.navItem, active && styles.navItemActive]}
    >
      <Feather name={icon} size={18} color={active ? colors.primaryText : 'white'} />
      <Text style={[styles.navItemLabel, active && styles.navItemLabelActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}
