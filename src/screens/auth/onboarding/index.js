import React from "react";
import { Image, Text, ImageBackground, View } from "react-native";
import { BG, Logo, Rectangle6 } from "~assets/images";
import { Button, ScreenWrapper } from "~components";
import { H1, H4 } from "~components/texts";
import ScreenNames from "~routes/routes";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";
import styles from "./styles";

export default function OnBoarding({ navigation }) {
  return (
    <ScreenWrapper
      scrollEnabled
      // backgroundColor={AppColors.transparent}
      // statusBarColor={AppColors.transparent}
      barStyle={"dark-content"}
    >
      <View style={styles.mainViewContainer}>
        <View style={styles.headerContainer}>
          <Image source={Logo} style={styles.logo} resizeMode={"contain"} />
          <Button
            title={"Skip"}
            onPress={() => navigation.goBack()}
            containerStyle={styles.skipBtn}
            textStyle={styles.btnText}
          />
        </View>
        <View style={{ width: width(80) }}>
          <H1 containerStyles={styles.title} textStyles={styles.text}>
            {`Find best place \nto stay in `}
            <Text style={{ color: "#204D6C", fontWeight: "bold" }}>
              good price
            </Text>
          </H1>
          <Text style={styles.desText}>
            {`Lorem ipsum dolor sit amet, consectetur \nadipiscing elit, sed.`}
          </Text>
        </View>

        <View style={{ marginTop: height(1) }}>
          <Image
            source={Rectangle6}
            style={styles.backImage}
            resizeMode="stretch"
          ></Image>
          <Button
            title={"Next"}
            onPress={() => navigation.navigate(ScreenNames.LOGIN)}
            containerStyle={styles.btn}
            textStyle={styles.btnText}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
