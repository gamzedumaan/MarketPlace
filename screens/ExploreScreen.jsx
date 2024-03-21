import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { COLORS, FONTS } from '../util/constants';

export default function ExploreScreen() {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    ProductsList();
  }, []);
  const ProductsList = () => {
    const URL = 'https://fakestoreapi.com/products';

    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.explore_Text}>Explore More</Text>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.itemContainer}
              onPress={() =>
                navigation.navigate('Item', {
                  item,
                })
              }>
              <Image resizeMode="contain" source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price} $</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  itemContainer: {
    height: 190,
    width: 135,
    borderWidth: 1,
    borderColor: COLORS.cream,
    borderRadius: 15,
    alignItems: 'center',
    margin: 30,
    right: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: COLORS.cream,
    elevation: 8,
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  image: {
    height: 90,
    width: 100,
    top: 10,
  },
  title: {
    fontWeight: '500',
    fontSize: 12,
    top: 10,
  },
  price: {
    fontWeight: '800',
    color: FONTS.h3,
    fontSize: 17,
    top: 20,
    right: 25,
  },
  explore_Text: {
    fontSize: 25,
    top: 20,
    margin: 10,
    fontWeight: '800',
  },
});
