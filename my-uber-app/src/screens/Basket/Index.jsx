import { View, Text, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import restaurants from "../../../assets/Uber Eats Asset Bundle/data/restaurants.json";
import React, { useState } from "react";
const restaurant = restaurants[0];

const BasketDishItems = ({ basketDish, id }) => {
  return (
    <View className="flex p-3 justify-between bg-slate-50 flex-row mt-10">
      <View className="flex flex-row gap-2">
        <Text className="bg-slate-200 font-bold">{id + 1} </Text>
        <Text className="">{basketDish.name}</Text>
      </View>
      <Text>${basketDish.price}</Text>
    </View>
  );
};

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
