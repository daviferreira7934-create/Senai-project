import { View, Text, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import { styles } from '../style/DashboardStyle'
import NavItem from './NavItem'

interface SidebarLink {
  key: string;
  label: string;
  icon: keyof typeof Feather.glyphMap;
  route?: string;
}

const links: SidebarLink[] = [
  { key: 'inicio', label: 'Início', icon: 'home', route: 'DashboardScreen' },
  { key: 'chat', label: 'Chat', icon: 'message-circle', route: 'ChatScreen' },
  { key: 'agenda', label: 'Agenda', icon: 'calendar' },
  { key: 'arquivos', label: 'Arquivos', icon: 'folder' },
  { key: 'perfil', label: 'Perfil', icon: 'user', route: 'LoginScreen' }, 
]

interface SidebarProps {
  active: string;
  onNavigate: (key: string) => void;
  navigation: any;
  footerVariant?: 'text' | 'profile';
}

export default function Sidebar({ active, onNavigate, navigation, footerVariant = 'text' }: SidebarProps) {
  const handlePress = (link: SidebarLink) => {
    onNavigate(link.key)
    if (link.route) {
      navigation.navigate(link.route)
    }
  }

  return (
    <LinearGradient
      colors={['#0047E5', '#0035B0']}
      style={styles.sidebar}
    >
      <View style={styles.sidebarTop}>
        <View style={styles.logoRow}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
              <Image
                source={require('../imagens/logo1.png')}
                style={styles.logoBox}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.logoTextTitle}>SENAI</Text>
            <Text style={styles.logoTextSubtitle}>Monitoria Connect</Text>
          </View>
        </View>

        {footerVariant === 'text' && (
          <Text style={styles.sidebarTagline}>
            {'Conectando monitores,\nalunos e professores.'}
          </Text>
        )}

        <View style={styles.navList}>
          {links.map((link) => (
            <NavItem
              key={link.key}
              icon={link.icon}
              label={link.label}
              active={active === link.key}
              onPress={() => handlePress(link)}
            />
          ))}
        </View>
      </View>

      {footerVariant === 'profile' ? (
        <View>
          <TouchableOpacity
            style={styles.profileFooter}
            onPress={() => navigation.navigate('LoginScreen')}
          >
            <View style={styles.profileAvatar}>
              <Text style={styles.profileAvatarText}>MS</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.profileName}>Mariana Souza</Text>
              <Text style={styles.profileRole}>Monitor(a)</Text>
            </View>
            <Feather name="chevron-down" size={16} color="white" />
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.sidebarFooter}>Uso exclusivo da comunidade SENAI</Text>
      )}
    </LinearGradient>
  )
}