import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Index = ({ dish }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("Dish", { id: dish.id })}
      className="mt-3 flex flex-row"
    >
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
    </Pressable>
  );
};

export default Index;
