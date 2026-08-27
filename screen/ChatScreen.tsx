import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import React, { useState } from 'react'
import { styles, colors } from '../style/ChatStyle'

import Sidebar from '../Components/Sidebar'
import PanelCard from '../Components/PanelCard'
import ChatListItem from '../Components/ChatListItem'
import CanalListItem from '../Components/CanalListItem'

const chats = [
  {
    key: 'lucas',
    initials: 'LC',
    avatarColor: '#0047E5',
    name: 'Lucas Costa',
    message: 'Obrigado pela ajuda na lista de exercícios!',
    time: '10:24',
    unreadCount: 1,
  },
  {
    key: 'helena',
    initials: 'PH',
    avatarColor: '#F59E0B',
    name: 'Prof. Helena',
    message: 'Entendi, vou revisar e te envio um retorno.',
    time: 'Ontem',
    unreadCount: 2,
  },
  {
    key: 'grupo',
    initials: 'GM',
    avatarColor: '#0EA5A5',
    name: 'Grupo Monitores',
    message: 'Ana: Pessoal, lembrem-se da reunião de amanhã.',
    time: 'Ontem',
    unreadCount: 5,
  },
  {
    key: 'ana',
    initials: 'AM',
    avatarColor: '#7C3AED',
    name: 'Ana Martins',
    message: 'Pode me enviar o material da última aula?',
    time: 'Terça-feira',
    unreadCount: 0,
  },
]

const canais = [
  {
    key: 'matematica',
    name: 'matemática',
    message: 'Prof. Rafael: Nova lista de exercícios disponível',
    time: '10:15',
    unreadCount: 3,
  },
  {
    key: 'dev',
    name: 'desenvolvimento-de-sistemas',
    message: 'João: Alguém tem um exemplo de API REST com autenticação?',
    time: 'Ontem',
    unreadCount: 7,
  },
  {
    key: 'duvidas',
    name: 'dúvidas-gerais',
    message: 'Mariana: Não entendi essa parte do cálculo da derivada. Alguém pode ajudar?',
    time: 'Ontem',
    unreadCount: 12,
  },
  {
    key: 'avisos',
    name: 'avisos',
    message: 'Equipe Monitoria: Reunião de monitores na sexta-feira às 16h no canal #geral',
    time: 'Segunda-feira',
    unreadCount: 1,
  },
]

export default function ChatScreen({ navigation }: any) {
  const [activeNav, setActiveNav] = useState('chat')

  return (
    <View style={styles.container}>
      <Sidebar
        active={activeNav}
        onNavigate={setActiveNav}
        navigation={navigation}
        footerVariant="profile"
      />

      <View style={styles.main}>
        <ScrollView contentContainerStyle={styles.mainContent}>
          <View style={styles.header}>
            <View>
              <Text style={styles.headerTitle}>Chat e Canais</Text>
              <Text style={styles.headerSubtitle}>
                Converse com pessoas e acompanhe os canais.
              </Text>
            </View>

            <View style={styles.headerActions}>
              <View style={styles.searchBox}>
                <Feather name="search" size={16} color={colors.subtext} />
                <TextInput
                  placeholder="Buscar mensagens ou canais..."
                  style={styles.searchInput}
                />
              </View>

              <TouchableOpacity style={styles.iconButton}>
                <Feather name="bell" size={16} color={colors.heading} />
                <View style={styles.notifDot} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.panelsRow}>
            <View style={styles.panelColumnChat}>
              <PanelCard
                title="Chats"
                dropdownLabel="Recentes"
                showListIcon
                footerLabel="Ver todos os chats"
              >
                {chats.map((chat, index) => (
                  <ChatListItem
                    key={chat.key}
                    initials={chat.initials}
                    avatarColor={chat.avatarColor}
                    name={chat.name}
                    message={chat.message}
                    time={chat.time}
                    unreadCount={chat.unreadCount}
                    isLast={index === chats.length - 1}
                  />
                ))}
              </PanelCard>

              <TouchableOpacity style={styles.newMessageButton}>
                <Feather name="edit" size={14} color="white" />
                <Text style={styles.newMessageButtonText}>Nova mensagem</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.panelColumnChat}>
              <PanelCard title="Canais" dropdownLabel="Todos" footerLabel="Ver todos os canais">
                {canais.map((canal, index) => (
                  <CanalListItem
                    key={canal.key}
                    name={canal.name}
                    message={canal.message}
                    time={canal.time}
                    unreadCount={canal.unreadCount}
                    isLast={index === canais.length - 1}
                  />
                ))}
              </PanelCard>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
