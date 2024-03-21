import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';

export default function ItemScreen({ route }) {
  const { params } = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    console.log(params.item);
  }, []);
  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() =>
          navigation.navigate('Detail', {
            item: route.params.item,
          })
        }>
        <Image
          resizeMode="contain"
          source={{ uri: route.params.item.image }}
          style={styles.image}
        />
        <Text style={styles.title}>{route.params.item.title}</Text>
        <Text style={styles.price}>{route.params.item.price}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    height: 174,
    width: 195,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'left',
  },
  price: {
    fontWeight: '800',
    color: '#378CE7',
    fontSize: 17,
    right: 35,
    top: 10,
  },
  itemContainer: {
    height: '50%',
    width: 145,
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
});
