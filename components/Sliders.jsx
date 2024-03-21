import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';

export default function Sliders() {
  const slidersData = [
    {
      id: 1,
      image: require('./../assets/images/marketing.png'),
    },
    {
      id: 2,
      image: require('./../assets/images/marketing.png'),
    },
    {
      id: 3,
      image: require('./../assets/images/marketing.png'),
    },
  ];
  return (
    <View>
      <FlatList
      horizontal
        data={slidersData}
        renderItem={({ item }) => {
          return (
            <View style={{marginTop:40, margin:5}}>
              <Image resizeMode="contain" style={{ height: 150, width: 200 }} source={item.image} />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
