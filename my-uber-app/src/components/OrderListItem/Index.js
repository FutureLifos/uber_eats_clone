import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const OrderListItem = ({ order }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("Order", { id: order.id })}
      className="flex items-center justify-between flex-row"
    >
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
    </Pressable>
  );
};

export default OrderListItem;
