import { Tabs, useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "react-native";

export default () => {
    const router =useRouter();
  return (
    <Tabs screenOptions={{ tabBarShowLabel: true, headerRight: () => <Button title="close" onPress={() => {router.back()}} /> }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ), title: 'Home', headerShown:false
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="envelope" size={24} color={color} />
          ), title: 'Profile', headerShown: false
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="newspaper-o" size={24} color={color} />
          ), title: 'News', headerShown: false
        }}
      />
      
    </Tabs>
  );
};
