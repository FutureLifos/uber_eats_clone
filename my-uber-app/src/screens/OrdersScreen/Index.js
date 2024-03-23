import { View, Text, ScrollView } from "react-native";
import orders from "../../../assets/Uber Eats Asset Bundle/data/orders.json";
import React from "react";
import OrderListItem from "../../components/OrderListItem/Index";

const Index = () => {
  return (
    <ScrollView className="w-full flex-1 gap-3 mt-16">
      {Array.from({ length: orders.length }, (_, i) => (
        <View key={i}>
          <Text>
            <OrderListItem order={orders[i]} />
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Index;
