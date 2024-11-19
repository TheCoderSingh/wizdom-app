import { Image, Text, View } from "react-native";
import { images } from "../../constants";

const CustomButton = ({ title, next }) => {
  return (
    <View className="flex flex-row justify-between items-center bg-primary h-[60px] rounded-full px-4">
      <Text className="font-primary text-white text-xl text-center flex-1 pl-7">
        {title}
      </Text>
      <Image source={images.arrowRight} className="w-7 h-7" tintColor="#fff" />
    </View>
  );
};

export default CustomButton;
