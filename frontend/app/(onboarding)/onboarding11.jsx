import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";

const onboarding11 = () => {
  return (
    <View className="w-[85%] mx-auto flex justify-between h-full">
     <View>
        <Text className="text-heading font-primary font-bold text-2xl my-10 tracking-wider">What skills are you a leader in?</Text>
        <TextInput placeholder="List the skills that you feel confident in mentoring others in" className="font-primary pl-2 border-2 border-light h-[100px] w-[95%]" multiline/>
     </View>
      <View className="mb-20">
        <TouchableOpacity>
            <CustomButton title="Submit" /> 
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default onboarding11; 
