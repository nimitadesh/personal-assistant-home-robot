import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import ContactScreen from "./ContactScreen";
import TravelScreen from "./TravelScreen";
import SmartHomeScreen from "./SmartHomeScreen";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Call Contacts" component={ContactScreen} />
        <Stack.Screen name="Travel" component={TravelScreen} />
        <Stack.Screen name="Smart Home" component={SmartHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
