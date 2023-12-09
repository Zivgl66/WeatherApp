import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    borderRadius: 10,
    padding: 5,
    marginRight: 15,
  },
  image: {
    height: 35,
    width: 35,
  },
  text: {
    color: COLORS.darkBlue,
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
  },
  degree: {
    color: COLORS.red,
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
  },
});

export default styles;
