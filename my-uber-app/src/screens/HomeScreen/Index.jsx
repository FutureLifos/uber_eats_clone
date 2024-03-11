import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import restaurants from "../../../assets/Uber Eats Asset Bundle/data/restaurants.json";
import Index from "../../components/RestaurantItem/Index";

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <Index restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
