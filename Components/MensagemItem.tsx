import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../style/DashboardStyle'

interface MensagemItemProps {
  initials: string;
  avatarColor: string;
  name: string;
  message: string;
  time: string;
  unread?: boolean;
}

export default function MensagemItem({ initials, avatarColor, name, message, time, unread }: MensagemItemProps) {
  return (
    <View style={styles.listRow}>
      <View style={styles.listRowLeft}>
        <View style={[styles.avatarSmall, { backgroundColor: avatarColor }]}>
          <Text style={styles.avatarSmallText}>{initials}</Text>
        </View>
        <View>
          <Text style={styles.itemTitle}>{name}</Text>
          <Text style={styles.itemSubtitle}>{message}</Text>
        </View>
      </View>

      <View style={{ alignItems: 'flex-end', gap: 6 }}>
        <Text style={styles.itemSubtitle}>{time}</Text>
        {unread && <View style={styles.unreadDot} />}
      </View>
    </View>
  )
}
