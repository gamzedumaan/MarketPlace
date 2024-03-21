import { Entypo } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Share } from 'react-native';

import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';
import ItemScreen from '../screens/ItemScreen';

const Stack = createNativeStackNavigator();
export default function HomeStackNav() {
  const url = 'https://github.com/gamzedumaan';

  const onShare = async () => {
    const options = {
      url,
      mesage: 'This is my project',
    };
    Share.share(options);
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen name="Item" component={ItemScreen} />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerTitle: '',
          headerRight: () => (
            <Entypo
              onPress={() => {
                onShare();
              }}
              name="share"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
