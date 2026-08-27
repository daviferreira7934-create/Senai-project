import { View, Text } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import { styles, colors } from '../style/ChatStyle'

interface CanalListItemProps {
  name: string;
  message: string;
  time: string;
  unreadCount?: number;
  isLast?: boolean;
}

export default function CanalListItem({
  name,
  message,
  time,
  unreadCount,
  isLast,
}: CanalListItemProps) {
  return (
    <View style={[styles.chatRow, isLast && styles.chatRowLast]}>
      <View style={styles.chatRowLeft}>
        <View style={styles.channelIconBox}>
          <Feather name="hash" size={16} color={colors.primaryText} />
        </View>
        <View style={{ flexShrink: 1 }}>
          <Text style={styles.chatName}>{name}</Text>
          <Text style={styles.chatMessage} numberOfLines={1}>
            {message}
          </Text>
        </View>
      </View>

      <View style={styles.chatMeta}>
        <Text style={styles.chatTime}>{time}</Text>
        {!!unreadCount && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>{unreadCount}</Text>
          </View>
        )}
      </View>
    </View>
  )
}
