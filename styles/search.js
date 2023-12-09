import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  searchTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },
  noOfSearchedJobs: {
    marginTop: 2,
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  loaderContainer: {
    marginTop: SIZES.medium,
  },
  checkboxContainer: {
    // marginHorizontal: 4,
    dispaly: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // flex: 1,
    marginTop: 5,
  },
});

export default styles;
