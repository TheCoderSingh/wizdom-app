import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";

const onboarding3 = () => {
  return (
    <View className="w-[85%] mx-auto flex justify-between h-full">
     <View>
        <Text className="text-4xl font-primaryBold tracking-widest mt-6">
            More info, please.
        </Text>
        <Text className="text-heading font-primary font-bold text-2xl mt-20 tracking-wider">Where can we learn about you?</Text>
        <TextInput placeholder="Enter your website/LinkedIn" className="font-primary text-center border-b-2 border-light pb-2 my-10 w-full text-xl"/>
        <Text className="text-heading font-primary font-bold text-2xl mt-10 tracking-wider">What are you interested in?</Text>
        <TextInput placeholder="Design, Development, Product" className="font-primary text-center border-b-2 border-light pb-2 my-10 w-full text-xl"/>
     </View>
      <View className="mb-20">
        <TouchableOpacity onPress={() => router.push("onboarding4")}>
            <CustomButton title="Next" /> 
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default onboarding3; 
