import { Document } from 'mongoose';

export interface ColorToken extends Document {
  id: string;
  project_id: string;
  themes: ColorTheme;
  shades: ColorShade;
}

export interface ColorTheme extends Document {
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

export interface ColorShade extends Document {
  lightest: number;
  lighter: number;
  light: number;
  default: string;
  dark: number;
  darker: number;
}
