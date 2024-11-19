import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";

const onboarding6 = () => {
  return (
    <View className="w-[85%] mx-auto flex justify-between h-full">
     <View>
        <Text className="text-4xl font-primary font-bold tracking-widest mt-6">
            Connect with alumni.
        </Text>
        <Text className="text-heading font-primary font-bold text-2xl mt-20 tracking-wider">Where did you go to school?</Text>
        <Text className="text-light">(optional)</Text>
        <TextInput placeholder="Enter your school name" className="font-primary text-center border-b-2 border-light pb-2 my-10 w-full text-xl"/>
        <Text className="text-heading font-primary font-bold text-2xl mt-10 tracking-wider">Any credentials?</Text>
        <Text className="text-light">(optional)</Text>
        <TextInput placeholder="Diploma, Undergraduate, Masters" className="font-primary text-center border-b-2 border-light pb-2 my-10 w-full text-xl"/>
     </View>
      <View className="mb-20">
        <TouchableOpacity onPress={() => router.push("onboarding7")}>
            <CustomButton title="Next" /> 
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default onboarding6; 
