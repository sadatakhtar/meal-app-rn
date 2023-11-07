import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute, useNavigation } from "@react-navigation/native";

const MealItem = ({
  id,
  title,
  ingredients,
  imageUrl,
  color,
  duration,
  complexity,
  affordability,
}) => {
  const navigate = useNavigation();
  const handleImagePress = () => {
    // console.log("Pressed image!");
    navigate.navigate("MealsDetailScreen", {
      mealIngredients: ingredients,
      mealId: id,
    });
  };
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      onPress={handleImagePress}
      style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
    >
      <View style={styles.mealContainer}>
        <LinearGradient
          colors={["#f54242", "#f5d142"]}
          style={styles.mealTitleContainer}
        >
          <Text style={styles.mealTitle}>{title}</Text>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </View>
        </LinearGradient>

        <View style={styles.description}>
          <Text>
            <Text style={styles.innerTags}>Duration:</Text> {duration} minutes
          </Text>
          <Text>
            <Text style={styles.innerTags}>Complexity:</Text> {complexity}
          </Text>
          <Text>
            <Text style={styles.innerTags}>Affordability:</Text> {affordability}
          </Text>
        </View>

        {/* <View style={styles.ingredientsContainer}>
        <Text style={styles.ingredients}>Ingredients</Text>
        <Text>{ingredients}</Text>
      </View> */}
      </View>
    </Pressable>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealContainer: {
    // borderWidth: 1,
    // borderColor: "black",
    // padding: 16,
    borderRadius: 8,
    margin: 16,
    backgroundColor: "white",
    overflow: "hidden",
  },
  mealTitleContainer: {
    borderWidth: 0.5,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
  },
  mealTitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    padding: 8,
  },
  ingredients: {
    fontWeight: "bold",
    fontSize: 15,
    padding: 6,
  },
  ingredientsContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginVertical: 8,
  },
  innerTags: {
    fontSize: 15,
    fontWeight: "bold",
  },
  description: {
    marginTop: 8,
    padding: 16,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
