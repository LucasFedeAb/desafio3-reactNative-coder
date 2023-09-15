import { StyleSheet } from "react-native";
import { colors, colorGreen } from "../../constants/colors";

const styles = StyleSheet.create({
  nav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: colorGreen.quaternary,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    zIndex: 1500,
  },
  navContent: {
    flexDirection: "row",
  },
  linkItem: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  linkItemPlus: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  activeLinkItem: {
    transform: [{ translateY: -5 }],
  },

  linkText: {
    fontSize: 8,
    fontWeight: "500",
    color: colors.primary,
    opacity: 0,
    transform: [{ translateY: 5 }],
    textAlign: "center",
  },
  activeLinkText: {
    opacity: 1,
  },
  linkTextPlus: {
    position: "absolute",
    fontSize: 8,
    fontWeight: "500",
    color: "#00a884",
    opacity: 0,
    transform: [{ translateY: 24 }],
  },
  iconPlusStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colorGreen.tertiary,
    fontSize: 40,
    borderRadius: 60,
    bottom: 4,
    paddingHorizontal: 6.5,
    color: colors.primary,
    padding: 5,
  },
  icon: {
    bottom: 0,
  },
});

export default styles;
