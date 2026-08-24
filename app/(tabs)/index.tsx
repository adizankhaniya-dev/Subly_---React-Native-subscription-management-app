import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1  items-center justify-center bg-background">
      <Text className="text-3xl font-sans-extrabold font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href={"/Onboarding"} className="bg-black text-white mt-4 px-3 py-3">
        {" "}
        GO to OnBoarding
      </Link>
      <Link
        href={"/(auth)/Signin"}
        className="bg-black text-white mt-4 px-3 py-3"
      >
        {" "}
        Sign In
      </Link>
      <Link
        href={"/(auth)/Signup"}
        className="bg-black text-white mt-4 px-3 py-3"
      >
        {" "}
        Sign Up
      </Link>
    </SafeAreaView>
  );
}
