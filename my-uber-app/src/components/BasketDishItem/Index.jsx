import { View, Text, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import restaurants from "../../../assets/Uber Eats Asset Bundle/data/restaurants.json";
import React, { useState } from "react";
const restaurant = restaurants[0];

const BasketDishItem = ({ basketDish, id }) => {
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

export default BasketDishItem;
