import { View, Text, ScrollView } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import restaurants from "../../../assets/Uber Eats Asset Bundle/data/restaurants.json";
import Index from "../../components/RestaurantItem/Index";

const HomeScreen = () => {
  return (
    <ScrollView>
      {Array.from({ length: restaurants.length }, (_, i) => (
        <View>
          <Index restaurant={restaurants[i]} />
        </View>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
