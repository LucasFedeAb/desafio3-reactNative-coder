import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    height: 120,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontFamily: "PoppinsThinItalic",
    color: colors.light,
    paddingTop: 50,
  },
});
