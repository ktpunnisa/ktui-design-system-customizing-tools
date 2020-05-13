import * as mongoose from 'mongoose';

export const ButtonShapeSchema = new mongoose.Schema(
  {
    borderRadius: Number,
    borderStyle: String,
    borderWidth: Number,
  },
  { _id: false, id: false },
);

export const ButtonPadding = new mongoose.Schema(
  {
    top: Number,
    right: Number,
    bottom: Number,
    left: Number,
  },
  { _id: false, id: false },
);

export const ButtonSizeValue = new mongoose.Schema(
  {
    fontSize: Number,
    padding: ButtonPadding,
  },
  { _id: false, id: false },
);

export const ButtonSizeSchema = new mongoose.Schema(
  {
    small: ButtonSizeValue,
    medium: ButtonSizeValue,
    large: ButtonSizeValue,
  },
  { _id: false, id: false },
);

export const ButtonFont = new mongoose.Schema(
  {
    type: String,
    color: String,
    shade: String,
  },
  { _id: false, id: false },
);

export const ButtonBackground = new mongoose.Schema(
  {
    type: String,
    color: String,
    shade: String,
  },
  { _id: false, id: false },
);

export const ButtonBorder = new mongoose.Schema(
  {
    type: String,
    color: String,
    shade: String,
  },
  { _id: false, id: false },
);

export const ButtonBoxShadow = new mongoose.Schema(
  {
    x: Number,
    y: Number,
    blur: Number,
    spread: Number,
    type: String,
    color: String,
    opacity: Number,
  },
  { _id: false, id: false },
);

export const ButtonStyle = new mongoose.Schema(
  {
    font: ButtonFont,
    background: ButtonBackground,
    border: ButtonBorder,
    boxShadows: [ButtonBoxShadow],
  },
  { _id: false, id: false },
);

export const ButtonState = new mongoose.Schema(
  {
    normal: ButtonStyle,
    hover: ButtonStyle,
    pressed: ButtonStyle,
    disabled: ButtonStyle,
  },
  { _id: false, id: false },
);

export const ButtonTypeSchema = new mongoose.Schema(
  {
    default: ButtonState,
    outline: ButtonState,
    ghost: ButtonState,
  },
  { _id: false, id: false },
);

export const ButtonSchema = new mongoose.Schema({
  project_id: String,
  shape: ButtonShapeSchema,
  sizes: ButtonSizeSchema,
  types: ButtonTypeSchema,
});
