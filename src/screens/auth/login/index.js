import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { Button, ScreenWrapper } from "~components";
import { setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import { setAppLoader } from "~redux/slices/config";
import { HeaderImage } from "~assets/images";
import AppColors from "~utills/AppColors";
import { H1 } from "~components/texts";
import { width } from "~utills/Dimension";
export default function Login({ navigation, route }) {
  const dispatch = useDispatch();
  return (
    <ScreenWrapper
      transclucent
      // backgroundColor={AppColors.transparent}
      // statusBarColor={AppColors.transparent}
      headerUnScrollable={() => (
        <Image
          source={HeaderImage}
          style={styles.headerImage}
          resizeMode="stretch"
        />
      )}
    >
      <View style={styles.mainViewContainer}>
        <View>
          <H1 containerStyles={styles.title} textStyles={styles.text}>
            {`Let’s `}
            <Text style={{ color: "#204D6C", fontWeight: "bold" }}>
              Sign In
            </Text>
          </H1>
          <Text style={{ fontSize: width(4) }}>
            quis nostrud exercitation ullamco laboris nisi ut
          </Text>
        </View>
        <Button
          title={"Login"}
          onPress={() => {
            dispatch(setAppLoader(true));
            setTimeout(() => {
              dispatch(setIsLoggedIn(true));
              dispatch(
                setUserMeta({
                  name: "John",
                  email: "John Doe",
                })
              );
              dispatch(setAppLoader(false));
            }, 600);
          }}
        />
      </View>
    </ScreenWrapper>
  );
}
