import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { colors } from "../src/theme/theme";

export default function Layout() {
  return (
    <>
      <StatusBar style="light" backgroundColor={colors.primary} />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.text,
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Museum Search" }} />
        <Stack.Screen name="results" options={{ title: "Search Results" }} />
        <Stack.Screen name="detail" options={{ title: "Museum Details" }} />
      </Stack>
    </>
  );
}