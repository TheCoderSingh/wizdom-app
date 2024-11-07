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

      <Text className="font-primary text-lg mb-2">
        Already have an account?
      </Text>
      <TouchableOpacity className="bg-primary w-[100%] h-[80px] flex justify-center items-center mb-6 mx-4">
        <Text className="text-white font-primary text-lg">Login</Text>
      </TouchableOpacity>

      <View className="flex flex-row items-center justify-center mb-5">
        <View className="flex-1 border-t border-primary" />
        <Text className="px-4 text-primary font-primary text-xl">OR</Text>
        <View className="flex-1 border-t border-primary" />
      </View>
      <TouchableOpacity
        className="bg-primary w-full h-[120px] flex flex-row justify-center items-center gap-2"
        onPress={() => router.push("onboarding1")}
      >
        <Text className="text-white font-primary text-xl tracking-wider">
          Let&apos;s get started
        </Text>
        <Image
          source={images.forward}
          className="h-6 w-6"
          resizeMode="contain"
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
