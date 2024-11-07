import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";

const onboarding7 = () => {
    const skills = ["Strategy", "Execution", "Delivery", "Coding", "Debugging", "Wireframing", "Prototyping", "Agile", "UX/UI Design", "Automation", "DevOps", "Roadmapping", "Collaboration", "Cloud Computing", "Data Analytics", "APIs", "Version Control", "Testing"];

  return (
    <View className="w-[85%] mx-auto flex justify-between h-full">
     <View>
        <Text className="text-4xl font-primary font-bold tracking-widest mt-6">
            What are your skills?
        </Text>
        <Text className="text-heading font-primary font-bold text-2xl mt-10 tracking-wider">Choose any skills below.</Text>
        <View className="flex flex-wrap flex-row gap-5 my-10">
          {skills.map((skill) => (
            <View className="w-[30%] border-2 border-light h-16 justify-center">
                <Text className="text-center text-light font-primary">{skill}</Text>
            </View>
          ))}
        </View>
     </View>
      <View className="mb-20">
        <TouchableOpacity onPress={() => router.push("onboarding9")}>
            <CustomButton title="Next" /> 
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default onboarding7; 
