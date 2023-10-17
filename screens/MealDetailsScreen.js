import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  SectionList,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = () => {
  const route = useRoute();
  // const navigate = useNavigation();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const renderIngredientsItems = (itemData) => {
  //   return <Text style={styles.textFont}>{itemData.item}</Text>;
  // };

  // const renderSteps = (itemData) => {
  //   return <Text style={styles.textFont}>{itemData.item}</Text>;
  // };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={[styles.textFont, styles.imageText]}>
          {selectedMeal.title}
        </Text>
      </View>

      <View style={styles.description}>
        <Text style={styles.subHeadings}>General</Text>
        <Text style={styles.textFont}>
          <Text style={[styles.innerTags, styles.textFont]}>Duration:</Text>{" "}
          {selectedMeal.duration} minutes
        </Text>
        <Text style={styles.textFont}>
          <Text style={[styles.innerTags, styles.textFont]}>Complexity:</Text>{" "}
          {selectedMeal.complexity}
        </Text>
        <Text style={styles.textFont}>
          <Text style={[styles.innerTags, styles.textFont]}>
            Affordability:
          </Text>
          {selectedMeal.affordability}
        </Text>
      </View>
      <View style={styles.description}>
        <Text style={[styles.textFont, styles.subHeadings]}>Ingredients</Text>
        {/* <FlatList
          data={selectedMeal.ingredients}
          renderItem={renderIngredientsItems}
          keyExtractor={(item) => item.id}
        /> */}
        {selectedMeal.ingredients.map((ingredient) => (
          <Text style={styles.textFont} key={ingredient}>
            {ingredient}
          </Text>
        ))}
      </View>
      <View style={styles.description}>
        <Text style={styles.subHeadings}>Steps</Text>
        {/* <FlatList
          data={selectedMeal.steps}
          renderItem={renderSteps}
          keyExtractor={(item) => item.id}
        /> */}
        {selectedMeal.steps.map((step) => (
          <Text style={styles.textFont} key={step}>
            {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  textFont: {
    color: "white",
  },
  innerTags: {
    fontSize: 15,
    fontWeight: "300",
  },
  image: {
    width: "100%",
    height: 200,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    margin: 8,
  },
  imageText: {
    padding: 16,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
  },
  subHeadings: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "500",
    marginBottom: 8,
  },
  description: {
    borderWidth: 1,
    borderColor: "white",
    margin: 8,
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
