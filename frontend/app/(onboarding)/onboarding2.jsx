import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";

const onboarding2 = () => {
  return (
    <View className="w-[85%] mx-auto">
      <Text className="text-5xl font-primaryBold tracking-widest mt-6">
        Tell us about you.
      </Text>
     <Text className="text-heading font-primaryBold text-3xl mt-10 tracking-wider">What's your name?</Text>
     <View className="flex flex-row justify-between my-10 gap-10 text-light">
        <TextInput placeholder="First Name" className="text-center border-b-2 border-light flex-1 pb-2"/>
        <TextInput placeholder="Last Name" className="text-center border-b-2 border-light flex-1 pb-2"/>
     </View>
     <Text className="text-heading font-primaryBold text-3xl mt-10 tracking-wider">What's your gender?</Text>
     <View className="flex flex-row my-10 gap-10">
        <View className="border-2 border-light w-full flex-1 py-5">
            <Text className="text-center text-light text-xl">Female</Text>
        </View>
        <View className="border-2 border-light w-full flex-1 py-5">
            <Text className="text-center text-light text-xl">Male</Text>
        </View>
     </View>
     <Text className="text-heading font-primaryBold text-3xl mt-10 tracking-wider">What's do you originate from?</Text>
     <TextInput placeholder="Enter your hometown" className="text-center border-b-2 border-light pb-2 mt-10 w-full text-xl mb-4"/>
      <TouchableOpacity onPress={() => router.push("onboarding3")}>
        <CustomButton title="Next" /> 
      </TouchableOpacity>
    </View>
  );
};

export default onboarding2; 
