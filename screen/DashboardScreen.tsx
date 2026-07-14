import { View, Text, ScrollView, TextInput } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import React, { useState } from 'react'
import { styles, colors } from '../style/DashboardStyle'

import Sidebar from '../Components/Sidebar'
import StatCard from '../Components/StatCard'
import SectionCard from '../Components/SectionCard'
import AtendimentoItem from '../Components/AtendimentoItem'
import MensagemItem from '../Components/MensagemItem'
import TarefaItem from '../Components/TarefaItem'
import AvisoItem from '../Components/AvisoItem'

const stats = [
  { key: 'horas', icon: 'clock' as const, value: '18h', label: 'Horas de monitoria', footer: '+2h esta semana' },
  { key: 'alunos', icon: 'users' as const, value: '24', label: 'Alunos atendidos', footer: '+6 esta semana' },
  { key: 'canais', icon: 'hash' as const, value: '7', label: 'Canais ativos', footer: 'Ver todos' },
  { key: 'atendimentos', icon: 'calendar' as const, value: '5', label: 'Atendimentos hoje', footer: 'Ver agenda' },
]

const atendimentos = [
  { key: 'fisica', title: 'Física – Mecânica', schedule: 'Hoje • 14:00 – 15:00', badgeLabel: 'Online', badgeBg: '#E8EEFF', badgeColor: colors.primaryText },
  { key: 'desenho', title: 'Desenho Técnico', schedule: 'Amanhã • 09:00 – 10:00', badgeLabel: 'Sala 205', badgeBg: '#EEF0F5', badgeColor: colors.subtext },
]

const mensagens = [
  { key: 'lucas', initials: 'LC', avatarColor: '#0047E5', name: 'Lucas Costa', message: 'Obrigado pela ajuda na lista de exercícios!', time: '10:24', unread: true },
  { key: 'ana', initials: 'AM', avatarColor: '#7C3AED', name: 'Ana Martins', message: 'Pode me enviar o material da última aula?', time: 'Ontem', unread: true },
  { key: 'grupo', initials: 'GM', avatarColor: '#0EA5A5', name: 'Grupo Monitores', message: 'Ana: Pessoal, lembrem-se da reunião de...', time: 'Ontem', unread: false },
]

const tarefas = [
  { key: 'corrigir', title: 'Corrigir atividades – Turma 1A', subtitle: 'Entrega até 23/05', badgeLabel: 'Prioridade média', badgeBg: '#EEF2FF', badgeColor: colors.primaryText, done: false },
  { key: 'preparar', title: 'Preparar material – Eletricidade', subtitle: 'Entrega até 25/05', badgeLabel: 'Prioridade baixa', badgeBg: '#E6FBF6', badgeColor: '#0E9F80', done: false },
  { key: 'relatorio', title: 'Atualizar relatório semanal', subtitle: 'Enviar até sexta-feira, 23/05', badgeLabel: 'Concluída', badgeBg: '#E7F9EE', badgeColor: '#22C55E', done: true },
]

export default function DashboardScreen({ navigation }: any) {
  const [activeNav, setActiveNav] = useState('inicio')
  const [taskDone, setTaskDone] = useState<Record<string, boolean>>({
    corrigir: false,
    preparar: false,
    relatorio: true,
  })

  return (
    <View style={styles.container}>
      <Sidebar active={activeNav} onNavigate={setActiveNav} navigation={navigation} />

      <View style={styles.main}>
        <ScrollView contentContainerStyle={styles.mainContent}>
          <View style={styles.header}>
            <View>
              <Text style={styles.headerTitle}>Olá, Monitor(a)!</Text>
              <Text style={styles.headerSubtitle}>
                Bem-vindo(a) ao seu espaço de colaboração e acompanhamento.
              </Text>
            </View>

            <View style={styles.headerActions}>
              <View style={styles.searchBox}>
                <Feather name="search" size={16} color={colors.subtext} />
                <TextInput placeholder="Buscar..." style={styles.searchInput} />
              </View>

              <View style={styles.iconButton}>
                <Feather name="bell" size={16} color={colors.heading} />
              </View>

              <View style={styles.avatar}>
                <Text style={styles.avatarText}>MC</Text>
              </View>
            </View>
          </View>

          <View style={styles.statsRow}>
            {stats.map((stat) => (
              <StatCard
                key={stat.key}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                footer={stat.footer}
              />
            ))}
          </View>

          <View style={styles.grid}>
            <SectionCard icon="calendar" title="Próximos atendimentos" actionLabel="Ver agenda">
              {atendimentos.map((item) => (
                <AtendimentoItem
                  key={item.key}
                  title={item.title}
                  schedule={item.schedule}
                  badgeLabel={item.badgeLabel}
                  badgeBg={item.badgeBg}
                  badgeColor={item.badgeColor}
                />
              ))}
            </SectionCard>

            <SectionCard icon="message-square" title="Mensagens recentes" actionLabel="Ver tudo">
              {mensagens.map((item) => (
                <MensagemItem
                  key={item.key}
                  initials={item.initials}
                  avatarColor={item.avatarColor}
                  name={item.name}
                  message={item.message}
                  time={item.time}
                  unread={item.unread}
                />
              ))}
            </SectionCard>

            <SectionCard icon="check-circle" title="Tarefas pendentes" actionLabel="Ver tudo">
              {tarefas.map((item) => (
                <TarefaItem
                  key={item.key}
                  title={item.title}
                  subtitle={item.subtitle}
                  badgeLabel={item.badgeLabel}
                  badgeBg={item.badgeBg}
                  badgeColor={item.badgeColor}
                  done={taskDone[item.key]}
                  onToggle={() =>
                    setTaskDone((prev) => ({ ...prev, [item.key]: !prev[item.key] }))
                  }
                />
              ))}

              <View style={styles.addTaskRow}>
                <Feather name="plus-circle" size={14} color={colors.primaryText} />
                <Text style={styles.addTaskText}>Nova tarefa</Text>
              </View>
            </SectionCard>

            <SectionCard icon="volume-2" title="Avisos" actionLabel="Ver todos">
              <AvisoItem
                title="Reunião de monitores"
                description="Sexta-feira, 24/05 às 16:00 no canal #geral"
              />
            </SectionCard>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
