import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import TabNavigations from './Navigations/TabNavigations';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  return (
    <ClerkProvider publishableKey="pk_test_ZW1pbmVudC1mZWxpbmUtOTMuY2xlcmsuYWNjb3VudHMuZGV2JA">
      <View style={styles.container}>
        <StatusBar style="auto" />
        <SignedIn>
          <NavigationContainer>
            <TabNavigations />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
