import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
  SafeAreaView,
} from 'react-native';

import { COLORS, FONTS } from '../util/constants';

export default function DetailScreen({ route }) {
  const [show, setShow] = useState(false);

  //   useEffect(() => {
  //     console.log(params.item);
  //   }, []);
  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{ uri: route.params.item.image }}
          />
          <Text style={styles.title}>{route.params.item.title}</Text>

          <Text style={styles.descriptionText}>Description</Text>
          <Text style={{ marginTop: 20, opacity: 0.5 }}>{route.params.item.description}</Text>
          <View style={styles.text_Container}>
            <TouchableOpacity style={styles.nameContainer}>
              <Text style={{ fontSize: 20, color: FONTS.h1 }}>G</Text>
            </TouchableOpacity>
            <View style={{ marginLeft: 20 }}>
              <Text>Gamze Duman</Text>
              <Text>hdhfrhfrh@gmail.com</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.google.com.tr/?hl=tr')}
            style={styles.sentContainer}>
            <Text style={{ fontSize: 16, color: FONTS.h1 }}>Sent Message</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  image: {
    height: '80%',
    width: '90%',
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
  },
  descriptionText: {
    fontSize: 17,
    fontWeight: '800',
    right: '36%',
    top: 15,
  },
  sentContainer: {
    height: 50,
    width: '95%',
    backgroundColor: COLORS.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  nameContainer: {
    height: 40,
    width: 40,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    left: 10,
  },
  text_Container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: COLORS.ice,
    width: '95%',
    top: 10,
  },
});
