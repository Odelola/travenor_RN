import { useFonts } from 'expo-font';
import { APP_FONTS } from './theme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppBottomTabNavigator, AuthScreenNavigator } from './navigators';
import Onboarding from 'screens/Onboarding';
import { APP_SCREEN_NAMES } from './constants';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  const [fontsLoaded] = useFonts({
    // Geometr415 Fonts
    [APP_FONTS['GEOMETR415']]: require('./assets/fonts/geometr415/geometr415.ttf'),

    // GillSans Fonts
    [APP_FONTS['GILL-SANS']]: require('./assets/fonts/gillsans/gillsansmt.ttf'),

    // Sf-Ui-Display Fonts
    [APP_FONTS['SF-UI-DISPLAY-REGULAR']]: require('./assets/fonts/sfuidisplay/sf-ui-display-light.otf'),
    [APP_FONTS['SF-UI-DISPLAY-MEDIUM']]: require('./assets/fonts/sfuidisplay/sf-ui-display-medium.otf'),
    [APP_FONTS['SF-UI-DISPLAY-SEMBOLD']]: require('./assets/fonts/sfuidisplay/sf-ui-display-semibold.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const AppStack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen name={APP_SCREEN_NAMES.ONBOARDING} component={Onboarding} />
          <AppStack.Screen name={APP_SCREEN_NAMES['AUTH-SCREEN-NAVIGATOR']} component={AuthScreenNavigator} />
          <AppStack.Screen name={APP_SCREEN_NAMES['APP-BOTTOM-TAB-NAVIGATOR']} component={AppBottomTabNavigator} />
        </AppStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}