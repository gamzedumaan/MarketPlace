import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Image } from 'react-native';

import Categories from '../components/Categories';
import LatesItemList from '../components/LatesItemList';
import Sliders from '../components/Sliders';
import { COLORS } from '../util/constants';

const searchIcon = require('./../assets/icons/Search.png');

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.borderWith}>
          <View
            style={{
              height: 100,
              width: '100%',
            }}>
            <Text style={styles.title}>Home</Text>
            <View style={styles.input_Container}>
              <Image source={searchIcon} style={styles.icon_Image} />
              <TextInput placeholder="Search" style={{ left: 10, fontSize: 14 }} />
            </View>
          </View>
          <Sliders />
          <Text style={styles.categories_Text}>Categories</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Categories text="Furniture" />
            <Categories text="Furniture" />
            <Categories text="Furniture" />
            <Categories text="Furniture" />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', top: 10 }}>
            <Categories text="Furniture" />
            <Categories text="Furniture" />
            <Categories text="Furniture" />
            <Categories text="Furniture" />
          </View>
          <LatesItemList />
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
    height: 40,
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.cream,
    borderRadius: 20,
    top: 20,
  },
  borderWith: {
    width: '95%',
    alignSelf: 'center',
  },
  input_Container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    height: 40,
    borderRadius: 20,
    top: 10,
  },
  icon_Image: {
    height: 30,
    width: 30,
    left: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  categories_Text: {
    fontSize: 20,
    fontWeight: '700',
    margin: 10,
  },
});
