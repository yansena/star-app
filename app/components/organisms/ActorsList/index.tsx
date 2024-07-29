import { ActivityIndicator, Text } from "react-native-paper";
import { ActorListItem } from "../../molecules";
import { FlatList, View } from "react-native";
import { useActorsViewModel } from "app/viewmodel/actorsViewModel";
import { useRouter } from "expo-router";
import { Container } from "./style";
import useActorsStore from "app/store/actors";
import { theme } from "app/utils/theme";
import { IndicatorContainer } from "app/style";



export function ActorsList() {
  const { status, error, isLoading } = useActorsViewModel();
  const actors = useActorsStore((state) => state.actors)


  if (isLoading) {
    return (
      <IndicatorContainer>
        <ActivityIndicator animating={true} size={'large'} color={theme.colors.offWhite} />
      </IndicatorContainer>
    )
  };
  if (status === 'error') return <Text>Error: {error?.message}</Text>;

  return (
    <Container>
      <FlatList
        data={actors}
        renderItem={({ item, index }) => <ActorListItem
          key={index}
          index={index}
          name={item.name}
          favorite={item.favorite}
        // onPress={( => onAc)}
        />} />
    </Container>
  )
}