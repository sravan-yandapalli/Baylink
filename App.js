import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Welcome from './screens/Welcome';
import Log from './screens/Log';
import Auth from './screens/Auth';
import Tank from './screens/Tank';
import Tank2 from './screens/Tank2';

const loadFonts = async () => {
  await Font.loadAsync({
    'Mulish-Regular': require('./assets/fonts/Mulish-Regular.ttf'),
    'Mulish-SemiBold': require('./assets/fonts/Mulish-SemiBold.ttf'), // Add other font variants if needed
  });
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync(); // Keep splash screen visible while fonts are loading
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
        await SplashScreen.hideAsync(); // Hide splash screen after fonts are loaded
      }
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null; // Render nothing while fonts are loading
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Log" component={Log} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        <Stack.Screen name="Tank" component={Tank} options={{ headerShown: false }} />
        <Stack.Screen name="Tank2" component={Tank2} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
