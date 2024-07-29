import styled from "@emotion/native";
import { theme as appTheme } from "../../../utils/theme";
import { Button } from "react-native-paper";

export const Container = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  padding: 6px 16px;
  border-radius: 6px;
  height: auto;
  margin: 5px;
  /* background-color: ${appTheme.colors.purple.light}; */
`;

export const IconTitleBox = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 8px 6px;
`;

export const NameTitle = styled.Text`
  font-family: "Lato_400Regular";
  font-size: 18px;
  margin-left: 12px;
`;
