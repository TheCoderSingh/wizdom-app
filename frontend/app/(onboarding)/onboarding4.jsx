import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";

const onboarding3 = () => {
  return (
    <View className="w-[85%] mx-auto flex justify-between h-full">
      <View>
        <Text className="text-4xl font-primaryBold tracking-widest mt-6">
          Who are your professionally?
        </Text>
        <Text className="text-heading font-primary font-bold text-2xl mt-10 tracking-wider">What is your official title?</Text>
        <TextInput placeholder="Student, CTO, UX/UI Designer" className="font-primary text-center border-b-2 border-light pb-2 my-5 w-full text-xl" />
        <Text className="text-heading font-primary font-bold text-2xl mt-5 tracking-wider">What were your previous titles?</Text>
        <TextInput placeholder="Tell us in detail" className="font-primary text-center border-b-2 border-light pb-2 my-5 w-full text-xl" />
        <Text className="text-heading font-primary font-bold text-2xl mt-5 tracking-wider">How many years of experience do you have?</Text>
        
        <View className="flex flex-wrap flex-row gap-5 w-[80%] my-10">
          <View className="w-[40%] border-2 border-light py-5">
            <Text className="text-center text-light font-primary">0-3 Years</Text>
          </View>
          <View className="w-[40%] border-2 border-light py-5">
            <Text className="text-center text-light font-primary">3-5 Years</Text>
          </View>
          <View className="w-[40%] border-2 border-light py-5">
            <Text className="text-center text-light font-primary">5-10 Years</Text>
          </View>
          <View className="w-[40%] border-2 border-light py-5">
            <Text className="text-center text-light font-primary">10+ Years</Text>
          </View>
        </View>
      </View>
      <View className="mb-20">
        <TouchableOpacity onPress={() => router.push("onboarding5")}>
          <CustomButton title="Next" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default onboarding3; 
