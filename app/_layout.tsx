import React from 'react'
import {Stack, useRouter} from 'expo-router';
import { Button } from 'react-native';
const StackLayout = () => {
    const router = useRouter();
  return (
    <Stack screenOptions={{headerStyle: {backgroundColor:'#10101e'}, headerTintColor:'#fff', headerTitleStyle: {fontWeight: 'bold'}}}>
        <Stack.Screen name='index' options={{headerTitle: 'Login', headerShown:false}}/>
        <Stack.Screen name='register' options={{headerTitle: 'Create account', headerRight: () => <Button title="open" onPress={() => {router.push("/modal")}}/>}}/>
        <Stack.Screen name='modal' options={{presentation: "modal", headerLeft: () => <Button title="Close" onPress={() => {router.back()}}/>}}/>
        <Stack.Screen name='(tabs)' options={{headerShown:false, headerRight: () => <Button title="Close" onPress={() => {router.replace("/")}}/>}}/>
    </Stack>
  )
}

export default StackLayout