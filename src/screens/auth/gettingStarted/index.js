import React from "react";
import { Image, View } from "react-native";
import { BG, Logo } from "~assets/images";
import { Button, ScreenWrapper } from "~components";
import { H1, H4 } from "~components/texts";
import ScreenNames from "~routes/routes";
import AppColors from "~utills/AppColors";
import styles from "./styles";

export default function GettingStarted({ navigation }) {
  return (
    <ScreenWrapper
      scrollEnabled
      backgroundImage={BG}
      transclucent
      backgroundColor={AppColors.transparent}
      statusBarColor={AppColors.transparent}
      barStyle={"light-content"}
    >
      <View style={styles.mainViewContainer}>
        {/* <Image source={Logo} style={styles.image} resizeMode={"contain"} /> */}
        <H1 containerStyles={styles.title} textStyles={styles.text}>
          Find What You Need
        </H1>
        <Button
          title={"Get Started"}
          onPress={() => navigation.navigate(ScreenNames.ONBOARDING)}
          containerStyle={styles.btn}
          textStyle={styles.btnText}
        />
      </View>
    </ScreenWrapper>
  );
}
