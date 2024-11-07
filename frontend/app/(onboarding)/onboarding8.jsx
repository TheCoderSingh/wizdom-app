import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";

const onboarding7 = () => {
    const skills = ["JavaScript", "Python", "React", "Node.js", "Ruby on Rails", "Figma", "Adobe Suite", "Angular", "Django", "HTML/CSS", "Vue.js", "TypeScript", "SQL", "MongoDB", "PostgreSQL", "AWS", "Docker", "Kubernetes", "Git", "SASS", "Firebase", "GraphQL", "Jira", "Miro"];

  return (
    <View className="w-[85%] mx-auto flex justify-between h-full">
     <View>
        <Text className="text-4xl font-primary font-bold tracking-widest mt-6">
            What is your tech stack?
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
