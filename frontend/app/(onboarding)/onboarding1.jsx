import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { images } from "../../constants";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";

const onboarding1 = () => {
  return (
    <View className="w-[85%] mx-auto">
      <Text className="text-4xl font-primary font-bold tracking-widest mt-6">
        Where are you located?
      </Text>
      <Image source={images.map} className="w-full mt-8 h-[330px]" />
      <TextInput
        placeholder="Enter your location"
        placeholderTextColor={colors.light}
        className="border-b-2 text-center mt-8 mb-16 text-2xl pb-2 text-light border-light"
      />
      <TouchableOpacity onPress={() => router.push("onboarding2")}>
        <CustomButton title="Next" /> 
      </TouchableOpacity>
    </View>
  );
};

export default onboarding1;
