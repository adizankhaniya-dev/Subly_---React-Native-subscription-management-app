import { formatCurrency } from "@/lib/utils";
import React from "react";
import { Image, Text, View } from "react-native";

const UpComingSubscription = ({ data }: UpcomingSubscriptionCardProps) => {
  const { name, price, daysLeft, icon, currency } = data;

  return (
    <View className="upcoming-card">
      <View className="upcoming-row">
        <View className="upcoming-icon-wrap">
          <Image source={icon} className="upcoming-icon" resizeMode="contain" />
        </View>
        <View>
          <Text className="upcoming-price">{formatCurrency(price, currency)}</Text>
          <Text className="upcoming-meta">
            {daysLeft > 1 ? `${daysLeft} days left` : 'Last day'} </Text>
        </View>
      </View>
      <Text className="upcoming-name" numberOfLines={1}>{name}</Text>
    </View>
  );
};

export default UpComingSubscription;
