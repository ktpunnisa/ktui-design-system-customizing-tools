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

export interface ShadeSystem {
  type: string;
  color: string;
  shade: string;
}
export interface ShadowSystem {
  x: number;
  y: number;
  blur: number;
  spread: number;
  type: string;
  color: string;
  opacity: number;
}

export interface ColorSystem {
  name: string;
  color: string;
  shade: string;
}
