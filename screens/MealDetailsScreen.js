import { useLayoutEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";
import SubTitle from "../components/SubTitle";
import List from "../components/List";
import IconButton from "../components/IconButton";

const MealDetailsScreen = () => {
  const route = useRoute();
  const navigate = useNavigation();
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const handleHeaderBtn = () => {
    console.log("Header button pressed!!!");
  };

  useLayoutEffect(() => {
    navigate.setOptions({
      headerRight: () => {
        return (
          <IconButton onPress={handleHeaderBtn} icon="star" color="white" />
        );
      },
    });
  }, [navigate, handleHeaderBtn]);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={[styles.textFont, styles.imageText]}>
          {selectedMeal.title}
        </Text>
      </View>

      <View style={styles.description}>
        <SubTitle>General</SubTitle>
        <View style={styles.innerContainer}>
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
      </View>

      <View style={styles.description}>
        <SubTitle>Ingredients</SubTitle>
        <View style={styles.innerContainer}>
          <List data={selectedMeal.ingredients} />
        </View>
      </View>

      <View style={styles.description}>
        <SubTitle>Steps</SubTitle>
        <View style={styles.innerContainer}>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginBottom: 32,
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
    height: 350,
  },
  imageContainer: {
    borderWidth: 0.5,
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

  description: {
    borderWidth: 0.5,
    borderColor: "white",
    margin: 8,
    borderRadius: 8,
    padding: 20,
  },
  stepsContainer: {
    flexDirection: "row",
  },
  innerContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
