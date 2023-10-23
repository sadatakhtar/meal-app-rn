import { StyleSheet, Text, View } from "react-native";
import React from "react";

const List = ({ data }) => {
  return data.map((dataPoint) => (
    <View style={styles.description}>
      <Text style={styles.textFont} key={dataPoint}>
        {dataPoint}
      </Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  textFont: {
    color: "white",
  },

//   description: {
//     borderWidth: 0.5,
//     borderColor: "white",
//     margin: 8,
//     borderRadius: 8,
//     padding: 20,
//     backgroundColor: '#3f2525'
//   },
});
