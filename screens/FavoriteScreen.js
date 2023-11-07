import { StyleSheet, View, Text } from "react-native";
import React from "react";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavoriteScreen = () => {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length == 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.textColor}>You have no favorite meals yet!</Text>
      </View>
    );
  }
  return <MealsList item={favoriteMeals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    padding: 24,
  },
  textColor: {
    color: "white",
    fontWeight: 'bold'
  },
});
