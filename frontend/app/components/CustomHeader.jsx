import { View, Text, TouchableOpacity, Image } from "react-native";
import { images } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, usePathname } from "expo-router";

const CustomHeader = () => {
  const screen = usePathname().replace("/", "");

  return (
    <SafeAreaView>
      <View className="flex flex-row mt-14 justify-between w-[85%] mx-auto">
        <Image source={images.logow} className="w-14 h-11" />
        <TouchableOpacity
          className="flex flex-row items-center justify-center gap-2"
          onPress={() => router.back()}
        >
          <Image
            source={images.arrowLeft}
            className="h-9 w-9"
            tintColor={colors.primary}
          />
          <Text className="text-2xl color-primary font-bold">Back</Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-row mt-10 justify-between w-[85%] mx-auto">
        <View
          className={`w-3 h-3 ${
            screen === "onboarding1" ? "bg-primary" : "bg-light"
          }`}
        />
        <View
          className={`w-3 h-3 ${
            screen === "onboarding2" ? "bg-primary" : "bg-light"
          }`}
        />
        <View
          className={`w-3 h-3 ${
            screen === "onboarding3" ? "bg-primary" : "bg-light"
          }`}
        />
        <View
          className={`w-3 h-3 ${
            screen === "onboarding4" ? "bg-primary" : "bg-light"
          }`}
        />
        <View
          className={`w-3 h-3 ${
            screen === "onboarding5" ? "bg-primary" : "bg-light"
          }`}
        />
        <View
          className={`w-3 h-3 ${
            screen === "onboarding6" ? "bg-primary" : "bg-light"
          }`}
        />
        <View
          className={`w-3 h-3 ${
            screen === "onboarding7" ? "bg-primary" : "bg-light"
          }`}
        />
        <View
          className={`w-3 h-3 ${
            screen === "onboarding8" ? "bg-primary" : "bg-light"
          }`}
        />
        <View
          className={`w-3 h-3 ${
            screen === "onboarding9" ? "bg-primary" : "bg-light"
          }`}
        />
        <View
          className={`w-3 h-3 ${
            screen === "onboarding10" ? "bg-primary" : "bg-light"
          }`}
        />
        <View
          className={`w-3 h-3 ${
            screen === "onboarding11" ? "bg-primary" : "bg-light"
          }`}
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;
