import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { colors, spacing, typography } from "../src/theme/theme";

export default function ResultsScreen() {
return (    
    <View style={styles.container}>
      <Text style={styles.subtitle}>Displaying results for your query</Text>
    </View>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing(2),
  },
    title: {    
    fontSize: typography.title,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: spacing(1),
  },
  subtitle: {
    fontSize: typography.body,
    color: colors.text,
    marginBottom: spacing(2),
  },
  text: {
    fontSize: typography.body,
    color: colors.text,
  },
});
