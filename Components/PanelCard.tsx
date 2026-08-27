import { View, Text, TouchableOpacity } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import { styles, colors } from '../style/ChatStyle'

interface PanelCardProps {
  title: string;
  dropdownLabel: string;
  showListIcon?: boolean;
  footerLabel: string;
  onFooterPress?: () => void;
  children: React.ReactNode;
}

export default function PanelCard({
  title,
  dropdownLabel,
  showListIcon,
  footerLabel,
  onFooterPress,
  children,
}: PanelCardProps) {
  return (
    <View style={styles.panelCard}>
      <View style={styles.panelHeader}>
        <Text style={styles.panelTitle}>{title}</Text>

        <View style={styles.panelDropdown}>
          <Text style={styles.panelDropdownText}>{dropdownLabel}</Text>
          <Feather
            name={showListIcon ? 'list' : 'chevron-down'}
            size={14}
            color={colors.subtext}
          />
        </View>
      </View>

      <View style={styles.chatList}>{children}</View>

      <TouchableOpacity onPress={onFooterPress}>
        <Text style={styles.footerLink}>{footerLabel}</Text>
      </TouchableOpacity>
    </View>
  )
}
