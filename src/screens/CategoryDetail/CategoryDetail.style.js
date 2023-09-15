import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";

export default styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontSize: 16,
    marginBottom: spacing.s,
  },
  label: {
    fontSize: 12,
    marginBottom: spacing.s,
  },
  containerCategory: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: colors.bgLight,
    zIndex: 2,
    borderRadius: 16,
  },

  imageCategory: {
    width: "100%",
    height: 130,
    borderRadius: 16,
  },

  scrollContainer: {
    width: "100%",
    marginTop: 140,
  },
  containerGifsCharacter: {
    marginVertical: spacing.s,
    paddingHorizontal: spacing.s,
  },

  imageGif: {
    width: 100,
    height: 100,
    marginRight: spacing.s,
  },
  headerListGifs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
