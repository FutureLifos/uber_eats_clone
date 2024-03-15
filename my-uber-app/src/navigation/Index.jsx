import { View, Text } from "react-native";
import { createNativeStackNavigtor } from "@react-navigation/native-stack";
import React from "react";
const Stack = createNativeStackNavigtor();

const RootNavigator = () => {
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Notifications" component={Notifications} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>;
};

export default RootNavigator;
