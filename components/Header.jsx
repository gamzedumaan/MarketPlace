import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function Header({ text, title }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.nameTitleContainer}>
          <Text style={styles.nameTitle}>G</Text>
        </View>
        <View style={{ left: 10 }}>
          <Text>{title}</Text>
          <Text style={styles.playText}>{text}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameTitleContainer: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  nameTitle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '500',
  },
  playText: {
    fontWeight: '800',
    fontSize: 17,
  },
  input: {
    left: 15,
    fontSize: 17,
  },
});
