import {
  StyleSheet,
  Text,
  View,
  Pressable,
  useWindowDimensions,
  Dimensions,
  Platform
} from "react-native";
import React from "react";

const CategoryGridTile = ({ title, color }) => {
  const { width, height } = useWindowDimensions();

  const handlePress = () => {
    console.log("Pressed!");
  };

  let content = (
    <View style={styles.gridLandscape}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={styles.button}
        onPress={handlePress}
      >
        <View style={styles.innerGrid}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );

  if (width < 380) {
    content = (
      <View style={styles.gridLandscape}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={styles.button}
          onPress={handlePress}
        >
          <View style={styles.innerGrid}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </Pressable>
      </View>
    );
  }

  return <View style={styles.gridContainer}>{content}</View>;
};

export default CategoryGridTile;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    margin: 16,
    borderWidth: 1,
    width: deviceWidth < 350 ? 100 : 150,
    height: deviceWidth < 350 ? 100 : 150,
    borderRadius: 8,
    elevation: 4,

    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  },
  gridLandscape: {
    flexDirection: "row",
    flex: 1,
    // padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
  innerGrid: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: deviceWidth > 350 ? 18 : 14,
  },
});