import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./Stacks";

const theme = {
  dark: true,
  colors: {
    primary: "#15202b",
    background: "#15202b",
    text: "#ffffff",
    card: "#15202b",
  },
};

const Navigator = () => {
  return (
    <NavigationContainer theme={theme}>
      <HomeStack />
    </NavigationContainer>
  );
};

export default Navigator;
