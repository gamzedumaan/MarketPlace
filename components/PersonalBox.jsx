import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const explore = require('./../assets/images/explore.png');
const heart = require('./../assets/images/heart.png');
const products = require('./../assets/images/products.png');

export default function PersonalBox({ text, text2, text3, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.box}>
        <Image source={products} style={styles.image} />
        <Text style={styles.title}>{text}</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={onPress} style={styles.box}>
        <Image source={heart} style={styles.image} />
        <Text style={styles.title}>{text2}</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={styles.box}>
        <Image source={explore} style={styles.image} />
        <Text style={styles.title}>{text3}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  box: {
    height: 85,
    width: 90,
    backgroundColor: '#ACE2E1',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#008DDA',
    opacity:0.9

  },
  image: {
    resizeMode: 'contain',
    height: 50,
    with: 50,
  },
  title: {
    fontSize: 15,
    color: '#008DDA',
  },
});
