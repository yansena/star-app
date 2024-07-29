import { Text } from "react-native-paper";
import styled from "@emotion/native";
import { theme } from "../utils/theme";

export const Container = styled.View`
  padding: 32px;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.blueDark.dark};
`;

export const HeadContent = styled.View`
  width: 100%;
  height: 13%;

  padding: 8px 16px 8px 16px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleBox = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-family: Nunito_600SemiBold;
  font-weight: 600;
  font-size: 28px;
  color: ${theme.colors.offWhite};
`;

export const SubTitle = styled.Text`
  font-family: Nunito_400Regular;
  font-weight: 600;
  font-size: 28px;
  color: ${theme.colors.offWhite};
`;

export const ProfileDetails = styled.View`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export const ActorText = styled.Text`
  color: ${theme.colors.offWhite};
`;
