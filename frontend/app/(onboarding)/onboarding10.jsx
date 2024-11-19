import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";

const onboarding10 = () => {
  return (
    <View className="w-[85%] mx-auto flex justify-between h-full">
     <View>
        <Text className="text-4xl font-primary font-bold tracking-widest mt-6">
            What are you looking for?
        </Text>
        <Text className="text-heading font-primary font-bold text-2xl my-10 tracking-wider">Who would you like to connect with?</Text>
        <TextInput placeholder="List the roles of people you'd want to connect with" className="font-primary pl-2 border-2 border-light h-[100px] w-[95%]" multiline/>
        <Text className="text-heading font-primary font-bold text-2xl my-10 tracking-wider">What would you like to improve in?</Text>
        <TextInput placeholder="List any skills you'd like to improve/work on" className="font-primary pl-2 border-2 border-light h-[100px] w-[95%]" multiline/>
     </View>
      <View className="mb-20">
        <TouchableOpacity onPress={() => router.push("onboarding11")}>
            <CustomButton title="Next" /> 
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default onboarding10; 
