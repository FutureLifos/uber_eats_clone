import { View, Text, Image } from "react-native";
import React from "react";

const Index = ({ dish }) => {
  return (
    <View className="mt-3 flex flex-row">
      <View className="flex-1">
        <Text className="text-2xl font-bold">{dish.name}</Text>
        <Text>{dish.description}</Text>
        <Text className="text-xl fobold">${dish.price}</Text>
      </View>
      {dish.image && (
        <View>
          <Image
            source={{ uri: dish.image }}
            style={{ width: 100, height: 100 }}
          />
        </View>
      )}
    </View>
  );
};

export default Index;
