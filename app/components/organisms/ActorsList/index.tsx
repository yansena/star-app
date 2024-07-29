import { ActivityIndicator, Text } from "react-native-paper";
import { ActorListItem } from "../../molecules";
import { FlatList, View } from "react-native";
import { useActorsViewModel } from "app/viewmodel/actorsViewModel";
import { useRouter } from "expo-router";
import { Container } from "./style";
import useActorsStore from "app/store/actors";
import { theme } from "app/utils/theme";
import { IndicatorContainer } from "app/style";
import { Actor } from '../../../models/Actor';



export function ActorsList() {
  const { status, error, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useActorsViewModel();
  const actors = useActorsStore((state) => state.actors)

  if (isLoading) {
    return (
      <IndicatorContainer>
        <ActivityIndicator animating={true} size={'large'} color={theme.colors.offWhite} />
      </IndicatorContainer>
    )
  };

  if (status === 'error') return <Text>Error: {error?.message}</Text>;

  const loadMoreActors = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <Container>
      <FlatList
        // style={{ marginTop: 16 }}
        data={actors}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) =>
          <ActorListItem
            index={index}
            actor={item}
          />}
        onEndReached={loadMoreActors}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage ? (
            <View style={{ padding: 10 }}>
              <ActivityIndicator animating={true} color={theme.colors.offWhite} />
            </View>
          ) : null
        }
      />
    </Container>
  )
}