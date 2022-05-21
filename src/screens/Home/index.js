import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { TWEETS } from "../../utils/data";
import Twitts from '../../components/twitt';
import Separator from '../../components/Separator';
const Home = ({ navigation, route }) => {
  return (
    <View style={{ flex:1, alignItems:"center", justifyContent:"center" }}>
      <FlatList
        data={TWEETS}
        ItemSeparatorComponent={()=><Separator/>}
        renderItem={({ item })=>(
          <Twitts data={item} navigation={navigation}/>
        )}
        keyExtractor={(item)=>item.id}
      />
    </View>
  )
}

export default Home