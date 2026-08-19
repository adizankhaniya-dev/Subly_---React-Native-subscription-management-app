import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const subscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View className="flex-1 justify-center items-center bg-black ">
      <Text className="text-white"> Subsciption Details: </Text>
      <Link href={"/"}>Home</Link>
    </View>
  );
};

export default subscriptionDetails;
