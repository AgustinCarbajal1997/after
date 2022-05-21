import React from "react";
import { View, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons"
const Header = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        height: 60,
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: insets.top,
        backgroundColor: "#15202b",
        flexDirection: "row",
        paddingHorizontal: 20,
      }}
    >
      <Image
        source={{
          uri: "https://static.motor.es/f1/fichas/contenido/kimi-raikkonen/kimi-raikkonen2021_1614590810.jpg",
        }}
        style={{ borderRadius: 50, width: 30, height: 30 }}
      />
      <Ionicons name="logo-twitter" color="#51d1f6" size={30}/>
      <Ionicons  name="star-outline" color="#fff" size={30}/>
    </View>
  );
};

export default Header;
