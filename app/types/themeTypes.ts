interface ThemeColors {
  purple: {
    light: string;
    mid: string;
    dark: string;
  };
  blueDark: {
    semiDark: string;
    dark: string;
  };
  offWhite: string;
  yellow: string;
}

interface ThemeFonts {
  nunito: {
    regular: string;
    semiBold: string;
  };
}

export interface AppTheme {
  colors: ThemeColors;
  fonts: ThemeFonts;
}
