import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { TWEETS } from "../../utils/data";
import styles from "./styles";
const Twitt = ({ navigation, route }) => {
  const [item, setItem] = useState(null);
  useEffect(() => {
    const findId = TWEETS.find((item) => item.id === route.params.id);
    setItem(findId);
  }, []);

  return (
    <>
      {item && (
        <View
          style={styles.tweetContainer}
        >
          <View style={styles.imageContainer}>
            <Image source={{ uri:item.img }} style={styles.image}/>
          </View>
          <View style={styles.dataContainer}>
            <View style={styles.headerTweet}>
              <Text style={styles.user}>{item.user}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      )}
    </>
  );
};

export default Twitt;
