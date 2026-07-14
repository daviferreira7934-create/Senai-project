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
    width: 38,
    height: 38,
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

  menu:{
    backgroundColor: "black",
    
  }

});
