import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../theme/colors';
import { StackScreen } from 'react-native-screens';

export default function Layout() {
  return (
    <>
        <StatusBar style="light" backgroundColor={colors.primary} />
        <Stack 
            ScreenOptions={{
                headerStyle: { backgroundColor: colors.background },
                headerTintColor: colors.white,
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <StackScreen name="index" options={{ title: 'Museum Search' }} /> 
            <StackScreen name="results" options={{ title: 'Search Results' }} />
            <StackScreen name="details" options={{ title: 'Museum Details' }} />
        </Stack>
    </>
  );
}