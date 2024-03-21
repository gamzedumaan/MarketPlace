import { FontAwesome, AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AddPostScreen from "../screens/AddPostScreen";
import ExploreScreen from "../screens/ExploreScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeStackNav from "./HomeStackNav";

const Tab = createBottomTabNavigator();
export default function TabNavigations() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Expolre"
        component={HomeStackNav}
        options={{
          tabBarLabel: ({ color }) => <Text style={{ color }}>Home</Text>,
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: ({ color }) => <Text style={{ color }}>Expolere</Text>,

          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="search1" size={size} color={color} />;
          },
        }}
      />
      {/* <Tab.Screen
        name="addpost"
        component={AddPostScreen}
        options={{
          tabBarLabel: ({ color }) => <Text style={{ color }}>Add Post</Text>,

          tabBarIcon: ({ color, size }) => {
            return <Entypo name="camera" size={size} color={color} />;
          },
        }}
      /> */}
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => <Text style={{ color }}>Profile</Text>,

          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="person-circle" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
