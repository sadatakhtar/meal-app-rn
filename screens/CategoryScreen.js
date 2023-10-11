import React from "react";
import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const renderCategoryItems = (itemData) => {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
};
const CategoryScreen = () => {
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
