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
      <Stack.Screen name="onboarding2" options={{ headerShown: true }} />
      <Stack.Screen name="onboarding3" options={{ headerShown: true }} />
      <Stack.Screen name="onboarding4" options={{ headerShown: true }} />
    </Stack>
  );
};

export default OnboardingLayout;
