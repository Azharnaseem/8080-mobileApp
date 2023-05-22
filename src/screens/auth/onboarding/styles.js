import { StyleSheet, Platform } from "react-native";
import { height, width } from "~utills/Dimension";
import AppColors from "../../../utills/AppColors";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: Platform.OS == "ios" ? height(4.3) : height(0),
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width(90),
    paddingVertical: height(4),
  },
  skipBtn: {
    backgroundColor: AppColors.gray3,
    width: width(20),
  },
  logo: {
    height: height(7),
    width: height(7),
    borderRadius: width(100),
  },
  backImage: {
    borderRadius: height(4),
    height: height(58),
    width: height(45),

    // backgroundColor: "red",
  },
  title: {
    width: width(70),
    paddingVertical: height(2),
  },
  text: {
    textAlign: "justify",
    color: AppColors.black,
    fontWeight: "500",
    lineHeight: height(5),
  },
  desText: {
    lineHeight: height(3.5),
    fontSize: width(4),
    marginBottom: height(2),
  },

  btn: {
    position: "absolute",
    bottom: height(4),
    backgroundColor: AppColors.green1,
    width: width(40),
  },
  btnText: {
    color: AppColors.black,
  },
});
export default styles;
