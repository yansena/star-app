import styled from "@emotion/native";
import { theme } from "app/utils/theme";

export const FilmItemContent = styled.View`
  flex-direction: row;
`;

export const FilmTitle = styled.Text`
  font-weight: 600;
  color: ${theme.colors.offWhite};
`;
export const FilmEpisode = styled.Text`
  color: ${theme.colors.offWhite};
`;
