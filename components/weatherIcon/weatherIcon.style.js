import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES, SHADOWS } from "../../constants";

const styles = StyleSheet.create({
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  image: {
    width: 30,
    height: 30,
  },
   text: {
    textAlign: "center",
    fontFamily: FONT.bold,
    color: COLORS.primary,
    fontSize: SIZES.xLarge,
    marginLeft: 5,
  },
});
export default styles;
