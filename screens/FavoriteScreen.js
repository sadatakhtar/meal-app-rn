import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>FavoriteScreen</Text>
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  textColor: {
    color: 'white'
  }
});
