import { View, Text, Button } from 'react-native'
import React from 'react'
import { useLocalSearchParams, Stack } from "expo-router";
const NewsDetailsPage = () => {
    const {id} = useLocalSearchParams();
  return (
    <View>
        <Stack.Screen options={{headerTitle: `News #${id}`, headerRight: () => <Button title="open" onPress={() => {}}/>}}/>
      <Text>My News id: {id}</Text>
    </View>
  )
}

export default NewsDetailsPage