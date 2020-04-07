export interface ColorToken {
  themes: ColorTheme;
  shades: ColorShade;
}
export interface ColorTheme {
  primary: string;
  secondary: string;
  success: string;
  info: string;
  warning: string;
  danger: string;
  white: string;
  gray: string;
  black: string;
}

export interface ColorShade {
  lightest: number;
  lighter: number;
  light: number;
  default: number;
  dark: number;
  darker: number;
}

export interface PaletteSize {
  s: Palette;
  m: Palette;
  l: Palette;
  xl: Palette;
}

export interface Palette {
  width: number;
  height: number;
  borderRadius: number;
}
