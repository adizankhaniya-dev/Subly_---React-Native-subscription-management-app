import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-2xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href={"/Onboarding"}> GO to OnBoarding</Link>
    </View>
  );
}
