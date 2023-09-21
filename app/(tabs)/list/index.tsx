import { View, Text } from 'react-native'
import React from 'react'
import {Link, useRouter} from 'expo-router'
const ListPage = () => {
  return (
    <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
      <Link href="/list/1">New One</Link>
      <Link href="/list/2">New Two</Link>
      <Link href="/list/3">New Three</Link>
    </View>
  )
}

export default ListPage