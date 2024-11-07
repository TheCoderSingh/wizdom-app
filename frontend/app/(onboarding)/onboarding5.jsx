import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";

const onboarding5 = () => {
  return (
    <View className="w-[85%] mx-auto flex justify-between h-full">
     <View>
        <Text className="text-4xl font-primary font-bold tracking-widest mt-6">
            Who have you worked with?
        </Text>
        <Text className="text-heading font-primary font-bold text-2xl mt-20 tracking-wider">Current Company?</Text>
        <TextInput placeholder="Enter your company name" className="font-primary text-center border-b-2 border-light pb-2 my-10 w-full text-xl"/>
        <Text className="text-heading font-primary font-bold text-2xl mt-10 tracking-wider">Previous companies?</Text>
        <Text className="text-light">(optional)</Text>
        <TextInput placeholder="Tell us in detail" className="font-primary text-center border-b-2 border-light pb-2 my-10 w-full text-xl"/>
     </View>
      <View className="mb-20">
        <TouchableOpacity onPress={() => router.push("onboarding6")}>
            <CustomButton title="Next" /> 
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default onboarding5; 
