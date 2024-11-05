import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import { images } from "../constants";
import { router } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";

const App = () => {
  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Render a loading screen if fonts are not loaded
  }

  return (
    <View className="flex-1 justify-between w-full items-center">
      {/* If logged in, redirect to home screen */}

      {/* If not logged in */}
      <View className="flex-1 justify-center items-center">
        <Image
          source={images.logo}
          style={{ width: 250 }}
          resizeMode="contain"
        />
      </View>
      <View className="bg-primary w-full h-[120px] justify-center items-center">
        <TouchableOpacity onPress={() => router.push("onboarding1")}>
          <Text className="text-white font-primary text-xl tracking-wider">
            Let&apos;s get started &gt;
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
