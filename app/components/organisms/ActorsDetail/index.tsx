import { Icon as ElementIcon } from '@rneui/themed';

import { ActorHeaderText, Title, ActorHeaderDescription, ProfileDetails, PaperDivider, ActorDeatilBox } from './styles';
import { Actor } from '../../../models/Actor';
import { theme } from 'app/utils/theme';
import { ActorsHome } from 'app/components/atoms/ActorHome';
import { ActorFilms } from '../ActorFilms';

type ActorDetailsProps = {
  actor: Actor
}

export function ActorDetails({ actor }: ActorDetailsProps) {
  return (
    <>
      <ProfileDetails>
        <Title>
          {actor.name.split(' ')[0]} has this personal attributes:
        </Title>
        <PaperDivider />
        <ActorDeatilBox>
          <ElementIcon
            name="height"
            type="material"
            color={theme.colors.offWhite}
            size={18}
          />
          <ActorHeaderText>
            Height:
          </ActorHeaderText>
          <ActorHeaderDescription>
            {actor.height} cm
          </ActorHeaderDescription>
        </ActorDeatilBox>
        <ActorDeatilBox>
          <ElementIcon
            name="scale"
            type="material"
            color={theme.colors.offWhite}
            size={18}
          />
          <ActorHeaderText>
            Mass:
          </ActorHeaderText>
          <ActorHeaderDescription>
            {actor.mass} kg
          </ActorHeaderDescription>
        </ActorDeatilBox>
        <ActorDeatilBox>
          <ElementIcon
            name="face"
            type="material"
            color={theme.colors.offWhite}
            size={20}
          />
          <ActorHeaderText>
            Hair Color:
          </ActorHeaderText>
          <ActorHeaderDescription>
            {actor.hair_color}
          </ActorHeaderDescription>
        </ActorDeatilBox>

        <ActorDeatilBox>
          <ElementIcon
            name="accessibility"
            type="material"
            color={theme.colors.offWhite}
            size={20}
          />
          <ActorHeaderText>
            Skin color:
          </ActorHeaderText>
          <ActorHeaderDescription>
            {actor.skin_color}
          </ActorHeaderDescription>
        </ActorDeatilBox>

        <ActorDeatilBox>
          <ElementIcon
            name="house"
            type="material"
            color={theme.colors.offWhite}
            size={20}
          />
          <ActorHeaderText>
            Home World:
          </ActorHeaderText>
          <ActorsHome url={actor.homeworld} />
        </ActorDeatilBox>


      </ProfileDetails>
      <ActorFilms urls={actor.films} />
    </>

  );
}