import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    padding: 16,
  },
  input: {
    backgroundColor: colors.light,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.dark,
    width: "80%",
    fontSize: 20,
  },
});
