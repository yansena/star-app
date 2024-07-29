import { View } from "react-native";
import { ActivityIndicator, Appbar, Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelectedActorViewModel } from "app/viewmodel/actorsDetailViewModel";

import { Container, HeadContent, SubTitle, TitleBox, Title, ProfileDetails, ActorText } from "./style";
import { ActorDetails } from "app/components/organisms/ActorsDetail";
import { theme } from "app/utils/theme";
import { router, useLocalSearchParams } from "expo-router";
import useActorsStore from "app/store/actors";



export default function SelectedActor() {
  const { id } = useLocalSearchParams()
  const sumId = Number(id) + 1;
  const { actor, error, isLoading } = useSelectedActorViewModel(sumId);
  const { addFavorite } = useActorsStore()




  if (isLoading || !actor) {
    return (
      <Container>
        <ActivityIndicator animating={true} size={'large'} color={theme.colors.offWhite} />
      </Container>
    )
  }


  if (error) {
    return <View><Text>{error.message}</Text></View>
  }


  return (
    <SafeAreaView>
      <Appbar dark style={{
        backgroundColor: theme.colors.blueDark.dark,
      }}  >
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content style={{ alignItems: 'center' }} title={actor.name} />
        <Appbar.Action onPress={() => addFavorite(actor.name)} icon="star" color={actor.favorite ? theme.colors.yellow : theme.colors.offWhite} />

      </Appbar>
      <Container>
        <ActorDetails actor={actor} />
      </Container>
    </SafeAreaView>
  )
}