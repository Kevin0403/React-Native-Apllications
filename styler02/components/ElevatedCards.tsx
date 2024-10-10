import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal = {true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>More</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    margin : 5,
    borderRadius : 100,
    borderColor : 'green',
    borderWidth : 10
  },
  cardElevated: {
    backgroundColor: "red",
  },
});
