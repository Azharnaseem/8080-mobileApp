import { StyleSheet } from "react-native";
import { height, width } from "~utills/Dimension";
import AppColors from "../../../utills/AppColors";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: AppColors.black,
    fontWeight: "bold",
    fontSize: width(5),
    marginBottom: height(2),
  },
  headerImage: {
    height: height(22),
    width: width(100),
    // backgroundColor: "red",
  },
});
export default styles;
