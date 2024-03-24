import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DishListItem from "../../components/DishListItem/Index";
import { Restaurant, Dish } from "../../models";
import { Predicates } from "@aws-amplify/datastore";
import { useRoute } from "@react-navigation/native";

const RestaurantDetailsPage = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [dishes, setDishes] = useState([]);
  const route = useRoute();
  const id = route.params.id;
  const navigate = useNavigation();
  useEffect(() => {
    (async () => {
      try {
        const res = await DataStore.query(Restaurant, id);
        setRestaurant(res);
        const res1 = await DataStore.query(Dish, Predicates.ALL);
        setDishes(res1.filter((dish) => dish.restaurantID === id));
        console.log("-----------------------------------------");
        dishes.map((eachdish, index) => (
          <div key={index}>{console.log(eachdish)} </div>
        ));
      } catch (error) {
        console.error(error.stack);
      }
    })();
  }, []);
  if (!restaurant) {
    return <ActivityIndicator size="large" />;
  }
  console.log(restaurant);
  console.log(id);
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
          <Text onPress={() => navigate.goBack()}>
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
          {`$${restaurant.deliveryFee.toFixed(2)} - ${
            restaurant.minDeliveryTime
          }-${restaurant.maxDeliveryTime} minutes`}
        </Text>
        {Array.from({ length: dishes.length }, (_, i) => (
          <View key={i}>
            <DishListItem dish={dishes[i]} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RestaurantDetailsPage;
