import { StyleSheet, Platform } from "react-native";
import { height, width } from "~utills/Dimension";
import AppColors from "../../../utills/AppColors";

const styles = StyleSheet.create({
  mainViewContainer: {
    height: height(100),
    width: width(100),
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: Platform.OS == "ios" ? height(4.3) : height(0),
  },
  title: {
    width: width(50),
    marginTop: height(50),

    // marginBottom: height(20),
  },
  text: {
    textAlign: "center",
    color: AppColors.white,
    fontWeight: "bold",
    shadowColor: "red",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },

  btn: {
    backgroundColor: AppColors.green1,
    elevation: 0,
    shadowColor: AppColors.white,
    marginBottom: height(2),
  },
  btnText: {
    color: AppColors.black,
  },
  image: {
    width: width(28),
    height: width(28),
  },
});
export default styles;
