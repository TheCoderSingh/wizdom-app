import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import { images } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomHeader = () => {
  return (
    <SafeAreaView>
      <View className="flex flex-row mt-14 justify-between w-[85%] mx-auto">
        <Image source={images.logow} className="w-14 h-11" />
        <TouchableOpacity className="flex flex-row items-center justify-center gap-2">
          <Image
            source={images.arrowLeft}
            className="h-9 w-9"
            tintColor={colors.primary}
          />
          <Text className="text-2xl color-primary font-bold">Back</Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-row mt-10 justify-between w-[85%] mx-auto">
        <View className="w-3 h-3 bg-primary" />
        <View className="w-3 h-3 bg-light" />
        <View className="w-3 h-3 bg-light" />
        <View className="w-3 h-3 bg-light" />
        <View className="w-3 h-3 bg-light" />
        <View className="w-3 h-3 bg-light" />
        <View className="w-3 h-3 bg-light" />
        <View className="w-3 h-3 bg-light" />
        <View className="w-3 h-3 bg-light" />
        <View className="w-3 h-3 bg-light" />
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;
