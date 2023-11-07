import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useRoute, useNavigation } from "@react-navigation/native";
import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";

const MealsOverviewScreen = () => {
  const route = useRoute();
  const navigate = useNavigation();
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigate.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigate]);

  return <MealsList items={displayedMeals}/>
  
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
 
});
