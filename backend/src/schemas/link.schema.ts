import * as mongoose from 'mongoose';

export const LinkSizeValue = new mongoose.Schema(
  {
    fontSize: Number,
  },
  { _id: false, id: false },
);

export const LinkSizeSchema = new mongoose.Schema(
  {
    small: LinkSizeValue,
    medium: LinkSizeValue,
    large: LinkSizeValue,
  },
  { _id: false, id: false },
);

export const LinkFont = new mongoose.Schema(
  {
    type: String,
    color: String,
    shade: String,
  },
  { _id: false, id: false },
);

export const LinkStyle = new mongoose.Schema(
  {
    font: LinkFont,
    textDecoration: String,
  },
  { _id: false, id: false },
);

export const LinkState = new mongoose.Schema(
  {
    normal: LinkStyle,
    hover: LinkStyle,
    pressed: LinkStyle,
  },
  { _id: false, id: false },
);

export const LinkTypeSchema = new mongoose.Schema(
  {
    default: LinkState,
    nav: LinkState,
  },
  { _id: false, id: false },
);

export const LinkSchema = new mongoose.Schema({
  project_id: String,
  sizes: LinkSizeSchema,
  types: LinkTypeSchema,
});
