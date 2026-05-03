// app/index.jsx
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Switch } from "react-native";
import { useRouter } from "expo-router";
import { colors, spacing, typography } from "../src/theme/theme";

export default function HomeScreen() {
  const router = useRouter(); 

  const [query, setQuery] = useState("");
  const [artist, setArtist] = useState("");
  const [yearFrom, setYearFrom] = useState("");
  const [yearTo, setYearTo] = useState("");
  const [onlyPublicDomain, setOnlyPublicDomain] = useState(false);

  const onSearch = () => {   
    router.push({
      pathname: "/results",
      params: {
        query,
        artist,
        yearFrom,
        yearTo,
        onlyPublicDomain: onlyPublicDomain ? "1" : "0",
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Find works at the Art Institute of Chicago</Text>

      <Text style={styles.label}>Search</Text>
      <TextInput
        style={styles.input}
        placeholder="Search by keyword, artist, or reference"
        value={query}
        onChangeText={setQuery}
      />

      <Text style={styles.label}>Artist</Text>
      <TextInput
        style={styles.input}
        placeholder="Vincent van Gogh"
        value={artist}
        onChangeText={setArtist}
      />

      <Text style={styles.label}>Year From</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 1880"
        value={yearFrom}
        onChangeText={setYearFrom}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Year To</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 1890"
        value={yearTo}
        onChangeText={setYearTo}
        keyboardType="numeric"
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Only Public Domain</Text>
        <Switch
          value={onlyPublicDomain}
          onValueChange={setOnlyPublicDomain}
        />
      </View>

      <Button title="Search" onPress={onSearch} color={colors.primary} />
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
    fontWeight: "700",
    marginBottom: spacing(0.5),
    color: colors.text,
  },
  subtitle: {
    fontSize: typography.body,
    marginBottom: spacing(2),
    color: colors.text,
  },
  label: {
    fontSize: typography.label,
    marginTop: spacing(1),
    marginBottom: spacing(0.5),
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: spacing(1),
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: spacing(1),
  },
});