import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const furniture = require('./../assets/images/furniture.png');
export default function Categories({ text }) {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => navigation.navigate('Item')}>
          <Image style={styles.image} source={furniture} />
          <Text style={{ bottom: 3 }}>{text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    backgroundColor: '#DFF5FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#67C6E3',
    borderRadius: 7,
  },
  image: {
    width: 40,
    height: 40,
  },
});
