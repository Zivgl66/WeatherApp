import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../constants";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  smallContainer: {
    // marginHorizontal: 4,
    dispaly: "flex",
    justifyContent: "center",
    // flex: 1,
    marginBottom: 10,
  },
 
  imagesContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    backgroundColor: COLORS.tertiary,
    padding: 15,
    borderRadius: 50,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  dailyContainer: {
    display: "flex",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: COLORS.lightBlue,
    padding: 15,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  image: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  headline: {
    color: COLORS.primary,
    textAlign: "center",
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.bold,
  },
  smallHeadline: {
    color: COLORS.gray,
    textAlign: "center",
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
  },
  degree: {
    color: COLORS.primary,
  },
  degreeText: {
    textAlign: "center",
    fontFamily: FONT.bold,
    color: COLORS.primary,
    fontSize: SIZES.huge,
  },
  text: {
    textAlign: "center",
    fontFamily: FONT.bold,
    color: COLORS.primary,
    fontSize: SIZES.xLarge,
    marginLeft: 5,
  },
  textSmall: {
    textAlign: "center",
    fontFamily: FONT.medium,
    color: COLORS.primary,
    fontSize: SIZES.medium,
  },
});

export default styles;
