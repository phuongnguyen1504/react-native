import { View, Pressable, Text } from 'react-native'
import React from 'react'
import {Link, useRouter} from 'expo-router'
const ProfilePage = () => {
  const router = useRouter()
  const handleLogout = () => {
    router.replace("");
  }
  return (
    <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
      {/* <Link href="/index">Log out</Link> */}
      <Pressable onPress={handleLogout}>
        <Text>Log Out</Text>
      </Pressable>
    </View>
  )
}

export default ProfilePage