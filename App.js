import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MealsCategories" screenOptions={{
               headerStyle: { backgroundColor: '#351401'},
               headerTintColor: 'white',
               contentStyle: { backgroundColor: '#3f2525'}
        }}>
          <Stack.Screen
            name="MealsCategories"
            component={CategoryScreen}
            options={{
              title: "All Categories",
         
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation}) => {
            //   const catId = route.params.categoryId
            //   return {
            //     title: catId
            //   };
            // }}
          />
            <Stack.Screen
            name="MealsDetailScreen"
            component={MealDetailsScreen}
            options={{
              title: "Meal Details",
         
            }}
          />
        </Stack.Navigator>
        <View style={styles.container}></View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
