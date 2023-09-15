import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    minWidth: 90,
    width: "85%",
    maxWidth: 500,
    height: 75,
    minHeight: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    marginBottom: 16,
    padding: 16,
  },

  text: {
    fontWeight: "500",
    letterSpacing: 1,
    paddingBottom: 8,
  },
  containerImg: {
    flexDirection: "row",
    justifyContent: "center",
  },
  imageCategory: {
    width: "96%",
    height: 100,
    borderRadius: 16,
  },
});
