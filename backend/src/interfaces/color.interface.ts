import { Document } from 'mongoose';

export interface Color extends Document {
  id: string;
  project_id: string;
  themes: Theme;
  shades: Shade;
}

export interface Theme extends Document {
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

export interface Shade extends Document {
  lightest: number;
  lighter: number;
  light: number;
  default: string;
  dark: number;
  darker: number;
}
