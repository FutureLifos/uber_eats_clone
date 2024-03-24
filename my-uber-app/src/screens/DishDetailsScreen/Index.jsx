import { View, Text, Pressable, ActivityIndicator } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import restaurants from "../../../assets/Uber Eats Asset Bundle/data/restaurants.json";
import { Dish } from "../../models";
import React, { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
const dish = restaurants[0].dishes[0];

const DishDetailsSreen = () => {
  const [quantity, setQuantity] = useState(1);
  const route = useRoute();
  const id = route.params.id;
  const [dish, setDish] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      try {
        const res = await DataStore.query(Dish, id);
        setDish(res);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  if (dish == null) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View className="flex-1 relative flex-col p-4 w-full">
      <Text className="text-3xl font-bold">{dish.name}</Text>
      <Text>{dish.description}</Text>
      <View className="flex gap-4 mt-8 justify-center flex-row  items-center">
        <AntDesign
          name="minuscircleo"
          onPress={() => {
            setQuantity(quantity - 1);
          }}
          size={36}
          color="black"
        />
        <Text className="text-xl">{quantity}</Text>
        <AntDesign
          name="pluscircleo"
          onPress={() => {
            setQuantity(quantity + 1);
          }}
          size={36}
          color="black"
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate("Basket")}
        className="absolute w-full left-4 bottom-10 rounded-lg "
      >
        <Text className="bg-black p-2 text-center text-white font-[600] text-xl">
          Add {quantity} to basket . $({(dish.price * quantity).toFixed(2)})
        </Text>
      </Pressable>
    </View>
  );
};
export default DishDetailsSreen;
