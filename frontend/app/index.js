import { View, Text, StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const App = () => {
  useEffect(() => {
    const delaySplashScreen = async () => {
      // Artificial delay
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Hide the splash screen after the delay
      await SplashScreen.hideAsync();
    };

    delaySplashScreen();
  }, []);

  return (
    <View>
      <Text>Hello, world!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
