import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding } from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/regular.otf'),
    medium: require('./assets/fonts/medium.otf'),
    light: require('./assets/fonts/light.otf'),
    bold: require('./assets/fonts/bold.otf'),
    xtrabold: require('./assets/fonts/xtrabold.otf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded]);
    if (!fontsLoaded) {
      return null;
    }

  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Onboard' component={Onboarding} options={{ headerShown: false }} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}