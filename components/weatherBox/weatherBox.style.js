import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 65,
    borderRadius: 10,
    padding: 5,
    marginRight: 15,
  },
  image: {
    height: 30,
    width: 30,
  },
  text: {
    color: COLORS.darkBlue,
    fontSize: SIZES.xSmall,
    fontFamily: FONT.regular,
  },
  degree: {
    color: COLORS.darkBlue,
  },
});

export default styles;
