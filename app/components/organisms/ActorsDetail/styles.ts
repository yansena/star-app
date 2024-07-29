import styled from "@emotion/native";
import { theme } from "app/utils/theme";
import { Divider } from "react-native-paper";

export const ProfileDetails = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${theme.colors.purple.light};
  gap: 4px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${theme.colors.offWhite};
`;

export const PaperDivider = styled(Divider)`
  margin-bottom: 16px;
`;

export const ActorHeaderText = styled.Text`
  color: ${theme.colors.offWhite};
  font-size: 16px;
  font-weight: bold;
  /* margin-right: 4pxpx; */
`;

export const ActorHeaderDescription = styled.Text`
  color: ${theme.colors.offWhite};
  font-size: 16px;
  /* font-weight: bold; */
  margin-left: 8px;
`;

export const ActorDeatilBox = styled.View`
  display: flex;
  flex-direction: row;
  gap: 4px;

  align-items: center;
`;
