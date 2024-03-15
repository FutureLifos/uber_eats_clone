import { View, Image, Text } from "react-native";
import orders from "../../../assets/Uber Eats Asset Bundle/data/orders.json";
import restaurants from "../../../assets/Uber Eats Asset Bundle/data/restaurants.json";
import React from "react";
import BasketDishItem from "../../components/BasketDishItem/Index";

const OrderDetails = () => {
  const order = orders[0];
  const restaurant = restaurants[0].dishes;
  return (
    <View className="flex-1">
      <View style={{ position: "relative" }}>
        <Image
          source={{ uri: order.Restaurant.image }}
          style={{ width: 370, height: 200 }}
        />
      </View>
      <View
        className=""
        style={{
          width: "100%",
          marginHorizontal: "2%",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 32,
            marginTop: 16,
            marginBottom: 8,
          }}
        >
          {order.Restaurant.name}
        </Text>
        <Text>{order.status}</Text>
        <Text>Your Orders</Text>
      </View>

      <View>
        {Array.from({ length: restaurant.length }, (_, i) => (
          <View key={i}>
            <BasketDishItem basketDish={restaurant[i]} id={i} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default OrderDetails;
