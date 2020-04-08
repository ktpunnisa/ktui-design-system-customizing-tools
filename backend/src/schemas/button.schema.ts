import * as mongoose from 'mongoose';

export const ButtonShapeSchema = new mongoose.Schema({
  borderRadius: Number,
  borderStyle: String,
  borderWidth: Number,
});

export const ButtonPadding = new mongoose.Schema({
  top: Number,
  right: Number,
  bottom: Number,
  left: Number,
});

export const ButtonSizeValue = new mongoose.Schema({
  fontSize: Number,
  padding: ButtonPadding,
});

export const ButtonSizeSchema = new mongoose.Schema({
  small: ButtonSizeValue,
  medium: ButtonSizeValue,
  large: ButtonSizeValue,
});

export const ButtonFont = new mongoose.Schema({
  type: String,
  color: String,
  shade: String,
});

export const ButtonBackground = new mongoose.Schema({
  type: String,
  color: String,
  shade: String,
});

export const ButtonBorder = new mongoose.Schema({
  type: String,
  color: String,
  shade: String,
});

export const ButtonBoxShadow = new mongoose.Schema({
  x: Number,
  y: Number,
  blur: Number,
  spread: Number,
  type: String,
  color: String,
  opacity: Number,
});

export const ButtonStyle = new mongoose.Schema({
  font: ButtonFont,
  background: ButtonBackground,
  border: ButtonBorder,
  boxShadows: [ButtonBoxShadow],
});

export const ButtonState = new mongoose.Schema({
  normal: ButtonStyle,
  hover: ButtonStyle,
  pressed: ButtonStyle,
  disabled: ButtonStyle,
});

export const ButtonTypeSchema = new mongoose.Schema({
  default: ButtonState,
  outline: ButtonState,
  ghost: ButtonState,
});

export const ButtonSchema = new mongoose.Schema({
  project_id: String,
  shape: ButtonShapeSchema,
  sizes: ButtonSizeSchema,
  types: ButtonTypeSchema,
});
