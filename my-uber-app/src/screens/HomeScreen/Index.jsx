import { View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Index from "../../components/RestaurantItem/Index";
import { DataStore } from "@aws-amplify/datastore";
import { Restaurant } from "../../models";

const HomeScreen = () => {
  console.log("FFFF");
  const [restaurants, setRestaurants] = useState([]);
  console.log("ddd");

  useEffect(() => {
    console.log("tri");
    (async () => {
      try {
        console.log("sdsds");
        const results = await DataStore.query(Restaurant);
        console.log(results);
        console.log("fdsfsdkfj");
        setRestaurants(results);
      } catch (err) {
        console.error(err.stack);
      }
    })();
    console.log("endtrig");
  }, []);

  return (
    <ScrollView>
      {Array.from({ length: restaurants.length }, (_, i) => (
        <View key={i}>
          <Index restaurant={restaurants[i]} />
        </View>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
