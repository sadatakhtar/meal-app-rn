import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import MealItem from './MealItem'

const MealsList = ({ items }) => {
    const renderMealItem = (itemData) => {
        const item = itemData.item;
    
        const mealItemProps = {
          id: item.id,
          title: item.title,
          ingredients: item.ingredients,
          imageUrl: item.imageUrl,
          color: item.color,
          duration: item.duration,
          complexity: item.complexity,
          affordability: item.affordability,
        };
        return <MealItem {...mealItemProps} />;
      };
      return (
        <View style={styles.container}>
          <FlatList
            data={items}
            renderItem={renderMealItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
};

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
      },
});
