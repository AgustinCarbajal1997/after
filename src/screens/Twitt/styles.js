import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  tweetContainer: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal:3,
    paddingVertical:10
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.20,
    alignItems:"center"
  },
  image:{
    width:Dimensions.get("window").width * 0.15,
    height:Dimensions.get("window").width * 0.15,
    borderRadius:50
  },
  dataContainer: {
    width: Dimensions.get("window").width * 0.75,
  },
  headerTweet: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  user: {
    fontSize: 20,
    fontWeight: "600",
    color:"#fff"
  },
  date: {
    fontSize: 16,
    fontWeight: "500",
    color:"#fff"
  },
  description: {
    fontSize: 15,
    color:"#fff"
  },
});
export default styles;
