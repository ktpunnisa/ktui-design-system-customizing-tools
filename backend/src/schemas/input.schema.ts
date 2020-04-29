import * as mongoose from 'mongoose';

export const LabelMargin = new mongoose.Schema(
  {
    bottom: Number,
  },
  { _id: false, id: false },
);

export const LabelShape = new mongoose.Schema(
  {
    margin: LabelMargin,
  },
  { _id: false, id: false },
);

export const InputShape = new mongoose.Schema(
  {
    borderRadius: Number,
    borderStyle: String,
    borderWidth: Number,
  },
  { _id: false, id: false },
);

export const DInputShapeSchema = new mongoose.Schema(
  {
    label: LabelShape,
    input: InputShape,
  },
  { _id: false, id: false },
);

export const InputPadding = new mongoose.Schema(
  {
    top: Number,
    right: Number,
    bottom: Number,
    left: Number,
  },
  { _id: false, id: false },
);

export const InputSizeValue = new mongoose.Schema(
  {
    fontSize: Number,
    padding: InputPadding,
  },
  { _id: false, id: false },
);

export const LabelSizeValue = new mongoose.Schema(
  {
    fontSize: Number,
    fontWeight: Number,
  },
  { _id: false, id: false },
);

export const DInputSizeValue = new mongoose.Schema(
  {
    label: LabelSizeValue,
    input: InputSizeValue,
  },
  { _id: false, id: false },
);

export const DInputSizeSchema = new mongoose.Schema(
  {
    small: DInputSizeValue,
    medium: DInputSizeValue,
    large: DInputSizeValue,
  },
  { _id: false, id: false },
);

export const InputFont = new mongoose.Schema(
  {
    type: String,
    color: String,
    shade: String,
  },
  { _id: false, id: false },
);

export const InputBackground = new mongoose.Schema(
  {
    type: String,
    color: String,
    shade: String,
  },
  { _id: false, id: false },
);

export const InputBorder = new mongoose.Schema(
  {
    type: String,
    color: String,
    shade: String,
  },
  { _id: false, id: false },
);

export const InputStyle = new mongoose.Schema(
  {
    font: InputFont,
    background: InputBackground,
    border: InputBorder,
  },
  { _id: false, id: false },
);

export const LabelFont = new mongoose.Schema(
  {
    type: String,
    color: String,
    shade: String,
  },
  { _id: false, id: false },
);

export const LabelStyle = new mongoose.Schema(
  {
    font: LabelFont,
  },
  { _id: false, id: false },
);

export const DInputStyle = new mongoose.Schema(
  {
    label: LabelStyle,
    input: InputStyle,
  },
  { _id: false, id: false },
);

export const DInputState = new mongoose.Schema(
  {
    normal: DInputStyle,
    focus: DInputStyle,
    disabled: DInputStyle,
    error: DInputStyle,
  },
  { _id: false, id: false },
);

export const DInputTypeSchema = new mongoose.Schema(
  {
    default: DInputState,
  },
  { _id: false, id: false },
);

export const InputSchema = new mongoose.Schema({
  project_id: String,
  shape: DInputShapeSchema,
  sizes: DInputSizeSchema,
  types: DInputTypeSchema,
});
