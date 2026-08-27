import { StyleSheet } from "react-native";

export const colors = {
  primary: "#0047E5",
  primaryDark: "#0035B0",
  primaryText: "#0042dd",
  bg: "#F4F6FB",
  card: "#FFFFFF",
  border: "#E7EAF3",
  heading: "#12172B",
  subtext: "#7A8194",
  iconBg: "#E8EEFF",
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.bg,
  },

  sidebar: {
    width: 260,
    paddingVertical: 24,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },

  sidebarTop: {
    flexDirection: "column",
  },

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 0,
    marginBottom: 24,
  },

  logoBox: {
    width: 84,
    height: 84,
  },

  logoTextTitle: {
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    color: "white",
  },

  logoTextSubtitle: {
    fontFamily: "Inter_400Regular",
    fontSize: 11,
    color: "white",
  },

  sidebarTagline: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    color: "#D6E0FF",
    lineHeight: 18,
    marginBottom: 28,
  },

  navList: {
    flexDirection: "column",
    gap: 4,
  },

  sidebarFooter: {
    fontFamily: "Inter_400Regular",
    fontSize: 10,
    color: "#AFC0F5",
    textAlign: "center",
  },

  sidebarIllustration: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },

  sidebarIllustrationTagline: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    color: "#D6E0FF",
    lineHeight: 18,
    textAlign: "center",
    marginBottom: 10,
  },

  sidebarIllustrationImage: {
    width: 120,
    height: 90,
  },

  profileFooter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 10,
    padding: 10,
  },

  profileAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  profileAvatarText: {
    fontFamily: "Inter_700Bold",
    fontSize: 12,
    color: colors.primaryText,
  },

  profileName: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12.5,
    color: "white",
  },

  profileRole: {
    fontFamily: "Inter_400Regular",
    fontSize: 10.5,
    color: "#D6E0FF",
  },

  navItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },

  navItemActive: {
    backgroundColor: "white",
  },

  navItemLabel: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
    color: "white",
  },

  navItemLabelActive: {
    color: colors.primaryText,
  },

  main: {
    flex: 1,
  },

  mainContent: {
    padding: 28,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 16,
    marginBottom: 24,
  },

  headerTitle: {
    fontFamily: "Inter_700Bold",
    fontSize: 22,
    color: colors.heading,
  },

  headerSubtitle: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    color: colors.subtext,
    marginTop: 2,
  },

  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: 220,
  },

  searchInput: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    color: colors.heading,
  },

  iconButton: {
    width:  "1%",
    height: "2%",
    borderRadius: 19,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    fontFamily: "Inter_700Bold",
    fontSize: 13,
    color: "white",
  },

  statsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    marginBottom: 20,
  },

  statCard: {
    flexGrow: 1,
    flexBasis: "1%",
    backgroundColor: colors.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: "2%",
  },

  statTopRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: "3%",
  },

  statIconBox: {
    width: "4%",
    height: "4%",
    borderRadius: "10%",
    backgroundColor: colors.iconBg,
    alignItems: "center",
    justifyContent: "center",
  },

  statValue: {
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    color: colors.heading,
  },

  statLabel: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    color: colors.subtext,
  },

  statFooter: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 11,
    color: colors.primaryText,
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "flex-start",
    gap: "10%",
    height: "80%",
    padding: "2%"
  },

  sectionCard: {
    flexGrow: 1,  
    backgroundColor: colors.card,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.border,
    padding: "5%",
  },
parte1:{
  width:"40%",
  gap: "3%",
},

parte2:{
  width:"40%",
    gap: "3%",
    height: "100%", 
},
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "5%",
  },

  sectionHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  sectionIconBox: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: colors.iconBg,
    alignItems: "center",
    justifyContent: "center",
  },

  sectionTitle: {
    fontFamily: "Inter_700Bold",
    fontSize: 14,
    color: colors.heading,
  },

  sectionAction: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    color: colors.primaryText,
  },

  sectionBody: {
    flexDirection: "column",
    gap: 14,
  },

  listRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },

  listRowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flexShrink: 1,
  },

  bulletDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },

  itemTitle: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 13,
    color: colors.heading,
  },

  itemSubtitle: {
    fontFamily: "Inter_400Regular",
    fontSize: 11,
    color: colors.subtext,
    marginTop: 2,
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  badgeText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 10,
  },

  avatarSmall: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarSmallText: {
    fontFamily: "Inter_700Bold",
    fontSize: 11,
    color: "white",
  },

  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },

  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: "#C6CCDC",
    alignItems: "center",
    justifyContent: "center",
  },

  checkboxDone: {
    backgroundColor: "#22C55E",
    borderColor: "#22C55E",
  },

  itemTitleDone: {
    color: colors.subtext,
    textDecorationLine: "line-through",
  },

  addTaskRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 4,
  },

  addTaskText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    color: colors.primaryText,
  },

  avisoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    backgroundColor: "#EEF2FF",
    borderRadius: 10,
    padding: 14,
  },

  avisoTitle: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 13,
    color: colors.heading,
  },

  avisoDescription: {
    fontFamily: "Inter_400Regular",
    fontSize: 11,
    color: colors.subtext,
    marginTop: 2,
  },
});
