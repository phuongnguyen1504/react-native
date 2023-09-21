import React from 'react'
import {Stack, useRouter} from 'expo-router';
import { Button } from 'react-native';
const NewsLayout = () => {
    const router = useRouter();
  return (
    <Stack>
        <Stack.Screen name='index' options={{headerTitle: 'News', headerShown:false}}/>

    </Stack>
  )
}

export default NewsLayout