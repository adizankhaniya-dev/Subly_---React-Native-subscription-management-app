import { Link } from "expo-router";
import { Text, View } from "react-native";

const Onboarding = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Onboarding</Text>
      <Link href={"/"} className="mt-3 px-3 py-3 bg-black text-white">
        Go to Home
      </Link>
    </View>
  );
};

export default Onboarding;
