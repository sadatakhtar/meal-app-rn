import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SubTitle = ({ children }) => {
  return (
    <View style={styles.description}>
      <Text style={[styles.textFont, styles.subHeadings]}>{children}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  textFont: {
    color: "white",
  },
  subHeadings: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "500",
    marginBottom: 8,
  },
  description: {
    borderWidth: 0.5,
    borderColor: "white",
    margin: 8,
    borderRadius: 8,
    padding: 20,
    backgroundColor: '#724343',
    // width: '100%'
  },
});
