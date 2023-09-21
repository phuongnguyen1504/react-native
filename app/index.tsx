import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Link, useRouter } from 'expo-router'

const LoginPage = () => {
    const router = useRouter();
    const handlePress = () => {
        router.replace('home');
    }
  return (
    <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
        {/* //asChild to wrap child with onPress/event and still working */}
        <Pressable onPress={handlePress}>
            <Text>Login</Text>
        </Pressable>
        <Link href={"/register"} asChild>
            <Pressable>
                <Text>Create account</Text>
            </Pressable>
        </Link>
    </View>
  )
}

export default LoginPage