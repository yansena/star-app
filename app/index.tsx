import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActorsList } from './components/organisms/ActorsList';
import { View } from 'react-native';
import { Container, Title, SubTitle, HeadContent, TitleBox } from './style';

SplashScreen.preventAutoHideAsync();


export default function App() {
  return (
    <SafeAreaView>
      <Container>

        <HeadContent>
          <View>
            <SubTitle>
              Wellcome
            </SubTitle>
          </View>
          <TitleBox>
            <Title>
              The Star App
            </Title>
          </TitleBox>
        </HeadContent>
        <ActorsList />
      </Container>
    </SafeAreaView >
  );
}


