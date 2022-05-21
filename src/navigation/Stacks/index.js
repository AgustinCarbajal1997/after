import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import Twitt from "../../screens/Twitt";
import Header from "../../components/Header";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ header:()=><Header/> }}/>
      <Stack.Screen name="Twitt" component={Twitt} />
    </Stack.Navigator>
  );
};

export default HomeStack;