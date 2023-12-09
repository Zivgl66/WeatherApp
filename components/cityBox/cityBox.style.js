import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES, SHADOWS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    // marginTop: -25,
  },
  smallcontainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: SIZES.small,
    borderRadius: SIZES.small,
  },
  text: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.white,
  },
  smallText: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.white,
    marginTop: 3,
    textTransform: "capitalize",
    shadowColor: COLORS.white,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
export default styles;
