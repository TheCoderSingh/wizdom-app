import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";

const onboarding2 = () => {
  return (
    <View className="w-[85%] mx-auto flex justify-between h-full">
      <Text className="text-4xl font-primary font-bold tracking-widest mt-6">
        Tell us about you.
      </Text>
     <Text className="text-heading font-primary font-bold text-2xl mt-10 tracking-wider">What's your name?</Text>
     <View className="flex flex-row justify-between my-5 gap-10 text-light">
        <TextInput placeholder="First Name" className="font-primary text-center border-b-2 border-light flex-1 pb-2"/>
        <TextInput placeholder="Last Name" className="font-primary text-center border-b-2 border-light flex-1 pb-2"/>
     </View>
     <Text className="text-heading font-primary font-bold text-2xl mt-5 tracking-wider">What's your gender?</Text>
     <View className="flex flex-row my-5 gap-10 w-[80%]">
        <View className="border-2 border-light flex-1 py-5">
            <Text className="text-center text-light font-primary">Female</Text>
        </View>
        <View className="border-2 border-light flex-1 py-5">
            <Text className="text-center text-light font-primary">Male</Text>
        </View>
     </View>
     <Text className="text-heading font-primary font-bold text-2xl mt-7 tracking-wider">Where do you originate from?</Text>
     <TextInput placeholder="Enter your hometown" className="font-primary text-center border-b-2 border-light pb-2 mt-5 w-full text-xl mb-4"/>
     <View className="mb-20">
        <TouchableOpacity onPress={() => router.push("onboarding3")}>
            <CustomButton title="Next" /> 
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default onboarding2; 
