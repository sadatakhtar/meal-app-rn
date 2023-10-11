import React from "react";
import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoryScreen = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("MealsOverview");
  };

  const renderCategoryItems = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItems}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
