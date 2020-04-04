import * as mongoose from 'mongoose';

export const ThemeSchema = new mongoose.Schema({
  primary: String,
  secondary: String,
  success: String,
  info: String,
  warning: String,
  danger: String,
  white: String,
  gray: String,
  black: String,
});

export const ShadeSchema = new mongoose.Schema({
  lightest: Number,
  lighter: Number,
  light: Number,
  default: Number,
  dark: Number,
  darker: Number,
});

export const ColorSchema = new mongoose.Schema({
  project_id: String,
  themes: ThemeSchema,
  shades: ShadeSchema,
});
