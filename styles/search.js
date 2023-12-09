import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  searchHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  smallContainer: {
    display: "flex",
  },
  searchTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },
  noOfSearchResults: {
    marginTop: 2,
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  loaderContainer: {
    marginTop: SIZES.medium,
  },
  checkboxContainer: {
    dispaly: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
});

export default styles;
