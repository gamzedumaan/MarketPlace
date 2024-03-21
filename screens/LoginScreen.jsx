import { useOAuth } from '@clerk/clerk-expo';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';

import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';
import { COLORS, FONTS } from '../util/constants';

const shoppingImage = require('./../assets/images/MarketPlace.jpg');

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ alignItems: 'center' }}>
        <Image source={shoppingImage} style={styles.image} />
      </View>
      <View style={styles.text_Container}>
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.title}>Community Marketplace</Text>
          <Text style={styles.text}>
            It is a long established fact that a reader will be distracted by the readable .
          </Text>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.button_Text}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  text_Container: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.2,
    flex: 2,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  image: {
    height: 300,
    width: '90%',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
  },
  text: {
    fontSize: 18,
    opacity: 0.3,
    marginTop: 15,
  },
  button: {
    height: 50,
    width: '80%',
    backgroundColor: COLORS.blue,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  button_Text: {
    color: FONTS.h1,
    fontSize: 18,
  },
});
