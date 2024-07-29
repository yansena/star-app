import "@emotion/native";
import { ThemeType } from "../utils/theme";

declare module "@emotion/native" {
  export interface Theme extends ThemeType {}
}
