import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../style/ChatStyle'

interface ChatListItemProps {
  initials: string;
  avatarColor: string;
  name: string;
  message: string;
  time: string;
  unreadCount?: number;
  isLast?: boolean;
}

export default function ChatListItem({
  initials,
  avatarColor,
  name,
  message,
  time,
  unreadCount,
  isLast,
}: ChatListItemProps) {
  return (
    <View style={[styles.chatRow, isLast && styles.chatRowLast]}>
      <View style={styles.chatRowLeft}>
        <View style={[styles.avatarCircle, { backgroundColor: avatarColor }]}>
          <Text style={styles.avatarCircleText}>{initials}</Text>
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
