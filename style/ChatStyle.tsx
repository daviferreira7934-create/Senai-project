import { StyleSheet } from "react-native";
import { colors } from "./DashboardStyle";

export { colors };

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.bg,
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
    width: 260,
  },

  searchInput: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    color: colors.heading,
  },

  iconButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  notifDot: {
    position: "absolute",
    top: 7,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#EF4444",
    borderWidth: 1.5,
    borderColor: colors.card,
  },

  panelsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    alignItems: "flex-start",
  },

  panelColumn: {
    flexGrow: 1,
    flexBasis: 420,
    gap: 12,
  },

  panelCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 60,
    minHeight: 40, 
  },

  panelHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  panelTitle: {
    fontFamily: "Inter_700Bold",
    fontSize: 15,
    color: colors.heading,
  },

  panelDropdown: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  panelDropdownText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    color: colors.subtext,
  },

  chatList: {
    gap: 0,
  },

  chatRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  chatRowLast: {
    borderBottomWidth: 0,
  },

  chatRowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flexShrink: 1,
  },

  avatarCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarCircleText: {
    fontFamily: "Inter_700Bold",
    fontSize: 12,
    color: "white",
  },

  chatName: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 13,
    color: colors.heading,
  },

  chatMessage: {
    fontFamily: "Inter_400Regular",
    fontSize: 11.5,
    color: colors.subtext,
    marginTop: 2,
    maxWidth: 240,
  },

  chatMeta: {
    alignItems: "flex-end",
    gap: 6,
  },

  chatTime: {
    fontFamily: "Inter_400Regular",
    fontSize: 10.5,
    color: colors.subtext,
  },

  unreadBadge: {
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },

  unreadBadgeText: {
    fontFamily: "Inter_700Bold",
    fontSize: 10,
    color: "white",
  },

  channelIconBox: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: colors.iconBg,
    alignItems: "center",
    justifyContent: "center",
  },

  footerLink: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    color: colors.primaryText,
    textAlign: "center",
    marginTop: 10,
  },

  newMessageButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
  },

  newMessageButtonText: {
    fontFamily: "Inter_700Bold",
    fontSize: 13,
    color: "white",
  },
});
