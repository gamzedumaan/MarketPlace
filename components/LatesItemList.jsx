import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function LatesItemList() {
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
        setFilter(data);
        console.log(data);
      });
  };

  return (
    <View style={styles.container}>
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
    alignItems: 'center',
  },
  itemContainer: {
    height: 190,
    width: 135,
    borderWidth: 1,
    borderColor: '#E3E1D9',
    borderRadius: 15,
    alignItems: 'center',
    margin: 30,
    right: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#E3E1D9',
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
    color: '#378CE7',
    fontSize: 17,
    top: 20,
    right: 25,
  },
});
