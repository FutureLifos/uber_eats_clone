import { View, Text, Image } from "react-native";
import React from "react";

const OrderListItem = ({ order }) => {
  return (
    <View className="flex items-center justify-between flex-row">
      <View>
        <Image
          source={{ uri: order.Restaurant.image }}
          style={{ width: 70, height: 70 }}
        />
      </View>
      <View className="flex gap-1 ml-2">
        <Text className="font-bold text-xl">{order.Restaurant.name}</Text>
        <Text>3 items $38.54</Text>
        <Text>2 days ago {order.status} </Text>
      </View>
    </View>
  );
};

export default OrderListItem;
