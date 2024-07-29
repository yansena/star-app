import { Icon, Text } from "react-native-paper";
import { Container, NameTitle, IconTitleBox } from "./style";
import { Icon as ElementIcon } from '@rneui/themed';
import { theme } from "app/utils/theme";
import { Pressable } from "react-native";
import { Link, router } from "expo-router";

interface IListItem {
  name: string;
  index: number;
  favorite: boolean;
}


export function ActorListItem({ name, index, favorite }: IListItem) {

  const handleActorDetail = () => {
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
            {name}
          </NameTitle>
        </IconTitleBox>
        {
          favorite === true && (
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