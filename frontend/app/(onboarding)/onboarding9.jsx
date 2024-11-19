import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";

const onboarding9 = () => {
  return (
    <View className="w-[85%] mx-auto flex justify-between h-full">
     <View>
        <Text className="text-4xl font-primary font-bold tracking-widest mt-6">
            Give us a blurb.
        </Text>
        <Text className="text-heading font-primary font-bold text-2xl my-10 tracking-wider">Write about yourself.</Text>
        <TextInput placeholder="Enter your bio here (250 chars max)" className="font-primary pl-2 border-2 border-light h-[400px] text-xl" multiline/>
     </View>
      <View className="mb-20">
        <TouchableOpacity onPress={() => router.push("onboarding10")}>
            <CustomButton title="Next" /> 
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default onboarding9; 
