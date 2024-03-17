import { View, Text, ScrollView } from "react-native";
import restaurants from "../../../assets/Uber Eats Asset Bundle/data/restaurants.json";
import BasketDishItems from "../../components/BasketDishItem/Index";
import React, { useState } from "react";
const restaurant = restaurants[0];

const Basket = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <View className="flex-1 flex-col p-4 relative w-full">
      <Text className="text-3xl font-bold">{restaurant.name}</Text>
      <Text className="mt-3">Your Items</Text>
      {/* <BasketDishItems /> */}

      <ScrollView className="mb-10">
        {Array.from({ length: restaurant.dishes.length }, (_, i) => (
          <View key={i}>
            <BasketDishItems id={i} basketDish={restaurant.dishes[i]} />
          </View>
        ))}
      </ScrollView>
      <View className="absolute w-full bottom-10 left-4 rounded-lg">
        <Text className="bg-black p-2 my-auto text-center text-white font-[600] text-xl">
          Create Order
        </Text>
      </View>
    </View>
  );
};
export default Basket;
