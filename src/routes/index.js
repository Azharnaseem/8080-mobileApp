import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { GettingStarted, LoginScreen, OnBoarding } from "~screens/auth";
import { Loader } from "~components";
import ScreenNames from "./routes";
import { HomeScreen } from "~screens/app";
import { selectIsLoggedIn } from "~redux/slices/user";
const Stack = createNativeStackNavigator();

export default function Routes() {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <NavigationContainer>
      <Loader />
      {!isLogin ? (
        <Stack.Navigator
          initialRouteName={ScreenNames.GETTINGSTARTED}
          screenOptions={{ header: () => false }}
        >
          <Stack.Screen
            name={ScreenNames.GETTINGSTARTED}
            component={GettingStarted}
          />
          <Stack.Screen name={ScreenNames.ONBOARDING} component={OnBoarding} />
          <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName={ScreenNames.HOME}
          screenOptions={{ header: () => false }}
        >
          <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
