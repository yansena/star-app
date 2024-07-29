import { ActivityIndicator, Icon, Text } from "react-native-paper";
import { Container, NameTitle, IconTitleBox } from "./style";
import { Icon as ElementIcon } from '@rneui/themed';
import { theme } from "app/utils/theme";
import { Pressable } from "react-native";
import { Link, router } from "expo-router";
import { Actor } from "app/models/Actor";
import useActorsStore from "app/store/actors";

interface IListItem {
  index: number;
  actor: Actor;
}


export function ActorListItem({ index, actor }: IListItem) {

  const { setSelectedActor } = useActorsStore();

  const handleActorDetail = () => {
    setSelectedActor(actor);
    router.push(`/actor/${index}`);
  }


  return (
    <Pressable onPress={handleActorDetail}>
      <Container >
        <IconTitleBox >
          <ElementIcon
            name="rocket-launch"
            type="material"
            color={theme.colors.offWhite}
            size={20}
          />
          <NameTitle >
            {actor.name}
          </NameTitle>
        </IconTitleBox>
        {
          actor.favorite === true && (
            <Icon
              source="star"
              color={theme.colors.yellow}
              size={20}
            />
          )
        }
      </Container>
    </Pressable>
  )
}