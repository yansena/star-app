import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActorsList } from './components/organisms/ActorsList';

SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <SafeAreaView>
      <Container>
        <ActorsList />
      </Container>
    </SafeAreaView >
  );
}


