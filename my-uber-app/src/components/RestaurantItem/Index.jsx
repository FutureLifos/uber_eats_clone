import { Image, View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const USE_DEFAULT =
  "https://images.pexels.com/photos/17308537/pexels-photo-17308537/free-photo-of-close-up-of-a-dish-with-rice-and-chicken-in-sauce-topped-with-spring-onion.jpeg?auto=compress&cs=tinysrgb&w=600";

const Index = ({ restaurant }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Restaurant", { id: restaurant.id });
  };
  return (
    <Pressable onPress={onPress} className="mt-5">
      <Image
        source={{
          uri: restaurant.image.startsWith("http")
            ? restaurant.image
            : USE_DEFAULT,
        }}
        style={{ width: 350, height: 200 }}
      />
      <View className="flex flex-row items-center justify-between">
        <View>
          <Text className="font-bold text-xl mt-4 mb-2">{restaurant.name}</Text>
          <Text className="text-gray-700 mb-2">
            `${restaurant.deliveryFee.toFixed(2)} . {restaurant.minDeliveryTime}
            -{restaurant.maxDeliveryTime} minutes`
          </Text>
        </View>
        <Text className="bg-gray-400 p-4 rounded-full m-2">
          {restaurant.rating.toFixed(1)}
        </Text>
      </View>
    </Pressable>
  );
};
export default Index;
