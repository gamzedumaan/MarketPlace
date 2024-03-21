import { useAuth } from '@clerk/clerk-expo';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/Header';
import PersonalBox from '../components/PersonalBox';
import { COLORS, FONTS } from '../util/constants';

const logout = require('./../assets/images/logout.png');

export default function ProfileScreen({ onPress }) {
  const { isLoad, signOut } = useAuth();

  const SignOut = () => {
    if (!isLoad) {
      return signOut;
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        <Text style={styles.title}>Game Play</Text>
        <Text style={styles.mail}>gamze@gmail.com</Text>
        <PersonalBox text="My Projext" text2="Explore" text3="Explore" />
        <TouchableOpacity activeOpacity={0.6} onPress={SignOut} style={styles.box}>
          <Image source={logout} style={styles.image} />
          <Text style={styles.logout_Text}>logout</Text>
        </TouchableOpacity>
      </View>
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
    alignSelf: 'center',
    justifyContent: 'center',
    height: '95%',
    width: '95%',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  mail: {
    fontSize: 15,
    opacity: 0.6,
  },
  image: {
    resizeMode: 'contain',
    height: 50,
    with: 50,
  },
  box: {
    height: 85,
    width: '90%',
    backgroundColor: COLORS.ice,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.iceBlue,
    opacity: 0.9,
  },
  logout_Text: {
    fontSize: 17,
    color: FONTS.h3,
  },
});
