import { StyleSheet } from "react-native";
import { colorGreen, colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import { fontsType } from "../../constants/fontsType";

export default styles = StyleSheet.create({
  nav: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 100,
    backgroundColor: colorGreen.primary,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    paddingVertical: spacing.xl,
    zIndex: 999,
  },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.m,
    height: 70,
  },
  sidebarIcon: {
    paddingLeft: spacing.s,
    color: colors.light,
  },
  notificationIcon: {
    paddingRight: spacing.s,
    color: colors.light,
  },
  logo: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.logo,
  },

  sidebar: {
    position: "absolute",
    top: 25,
    left: 0,
    width: 280,
    height: 1500,
    padding: spacing.m,
    backgroundColor: colorGreen.primary,
    zIndex: 1000,
  },
  sidebarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: spacing.s,
  },
  sidebarCloseIcon: {
    alignSelf: "flex-end",
    padding: spacing.s,
  },
  sidebarLogo: {
    fontSize: 24,
    color: colors.logo,
    fontFamily: fontsType.bold,
  },
  sidebarNavLinks: {
    paddingHorizontal: spacing.xs,
    marginTop: spacing.xxxl,
  },
  sidebarNavLink: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.s,
  },
  sidebarNavLinkText: {
    fontSize: 17,
    fontWeight: "400",
    color: colors.light,
    paddingLeft: spacing.s,
  },
});
