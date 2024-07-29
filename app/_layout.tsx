import {
  SplashScreen,

  // This example uses a basic Layout component, but you can use any Layout.
  Stack,
} from 'expo-router';
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { Nunito_400Regular, Nunito_600SemiBold } from '@expo-google-fonts/nunito';

import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import styled, { css } from '@emotion/native'
import { ThemeProvider } from '@emotion/react'
import { theme } from './utils/theme';


SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient()


export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
    Nunito_400Regular,
    Nunito_600SemiBold
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Prevent rendering until the font has loaded or an error was returned
  if (!fontsLoaded && !fontError) {
    return null;
  }

  // Render the children routes now that all the assets are loaded.
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName='actorlist'
          >
            <Stack.Screen name='index' />
            <Stack.Screen name='actor/[id]' />
          </Stack>
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
