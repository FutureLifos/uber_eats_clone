import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  // SectionList,
} from "react-native";
import React from "react";
import restaurants from "../../../assets/Uber Eats Asset Bundle/data/restaurants.json";
import { FontAwesome5 } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem/Index";

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  console.log(restaurant.dishes);
  return (
    <View style={{ flex: 1, position: "relative", top: 10 }}>
      <View style={{ position: "relative" }}>
        <Image
          source={{ uri: restaurant.image }}
          style={{ width: "100%", height: 200 }}
        />
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 999,
            position: "absolute",
            top: 5,
            left: 3,
          }}
        >
          <Text>
            <FontAwesome5 name="arrow-circle-left" size={48} color="black" />
          </Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mt-5"
        style={{
          width: "92%",
          marginHorizontal: "5%",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 36,
            marginTop: 16,
            marginBottom: 8,
          }}
        >
          {restaurant.name}
        </Text>
        <Text style={{ color: "gray", marginBottom: 8 }}>
          {`${restaurant.deliveryFee} . ${restaurant.minDeliveryTime}-${restaurant.maxDeliveryTime} minutes`}
        </Text>
        {Array.from({ length: restaurant.dishes.length }, (_, i) => (
          <View key={i}>
            <DishListItem dish={restaurant.dishes[i]} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RestaurantDetailsPage;
