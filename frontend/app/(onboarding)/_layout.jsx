import { Stack } from "expo-router";
import CustomHeader from "../components/CustomHeader";

const OnboardingLayout = () => {
  return (
    <Stack
      screenOptions={{
        header: ({}) => <CustomHeader />,
      }}
    >
      <Stack.Screen name="onboarding1" options={{ headerShown: true }} />
    </Stack>
  );
};

export default OnboardingLayout;
