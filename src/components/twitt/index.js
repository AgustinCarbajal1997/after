import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles"
const Twitts = ({ data, navigation }) => {

  
  return (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={()=>navigation.navigate("Twitt", { id:data.id })}
    >
      <View style={styles.tweetContainer}>
        <View style={styles.imageContainer}>
            <Image source={{ uri:data.img }} style={styles.image}/>
        </View>
        <View style={styles.dataContainer}>
            <View style={styles.headerTweet}>
                <Text style={styles.user}>{data.user}</Text>
                <Text style={styles.date}>{data.date}</Text>
            </View>
            <Text style={styles.description}>{data.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Twitts;
