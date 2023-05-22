import { StyleSheet } from "react-native";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";
import FontFamily from "~utills/FontFamily";

const styles = StyleSheet.create({
  container: {
    height: height(6.8),
    flexDirection: "row",
    width: width(90),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: height(2),
    borderBottomWidth: width(0.3),
    borderBottomColor: AppColors.grayBorder1,
  },
  iconStyle: {
    width: width(4),
  },
  textInputView: {
    width: width(82),
    alignItems: "flex-start",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    width: width(82),
    fontFamily: FontFamily.RobotoRegular,
    fontSize: width(3.8),
    color: AppColors.black1,
  },
  mainInputContainer: {
    flex: 1,
    width: width(90),
    flexDirection: "row",
    alignItems: "center",
  },
  textContainerStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: AppColors.white,
  },
  containerStyle: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    elevation: 0,
  },
  textInputStyle: {
    height: height(4.5),
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: width(1),
    fontFamily: FontFamily.RobotoRegular,
    fontSize: width(3.8),
    color: AppColors.black,
  },
  codeTextStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginRight: 0,
    marginLeft: 0,
    fontFamily: FontFamily.RobotoRegular,
    fontSize: width(3.8),
    color: AppColors.black,
  },
  countryPickerButtonStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: height(0.6),
    marginRight: 0,
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
    width: width(8),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.white,
  },
});
export default styles;
