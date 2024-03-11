import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import restaurants from "../../../assets/Uber Eats Asset Bundle/data/restaurants.json";
const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  return (
    <View className="flex-1">
      <Image
        source={{ uri: restaurant.image }}
        style={{ width: 350, height: 200 }}
      />
      <Text className="font-bold text-xl mt-4 mb-2">{restaurant.name}</Text>
      <Text className="text-gray-700 mb-2">
        `${restaurant.deliveryFee} . {restaurant.minDeliveryTime}-
        {restaurant.maxDeliveryTime} minutes`
      </Text>
    </View>
  );
};

export default RestaurantDetailsPage;
