import { Image, View, Text } from "react-native";
import React from "react";

const Index = ({ restaurant }) => {
  return (
    <View className="mt-5">
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={{ width: 350, height: 200 }}
      />
      <View className="flex flex-row items-center justify-between">
        <View>
          <Text className="font-bold text-xl mt-4 mb-2">{restaurant.name}</Text>
          <Text className="text-gray-700 mb-2">
            `${restaurant.deliveryFee} . {restaurant.minDeliveryTime}-
            {restaurant.maxDeliveryTime} minutes`
          </Text>
        </View>
        <Text className="bg-gray-400 p-4 rounded-full m-2">
          {restaurant.rating}
        </Text>
      </View>
    </View>
  );
};

export default Index;
