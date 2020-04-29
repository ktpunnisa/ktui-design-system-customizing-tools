import { Document } from 'mongoose';

export interface InputToken extends Document {
  id: string;
  project_id: string;
  shape: DInputShape;
  sizes: DInputSize;
  types: DInputType;
}

export interface DInputShape extends Document {
  label: LabelShape;
  input: InputShape;
}

export interface LabelShape extends Document {
  margin: LabelMargin;
}

export interface LabelMargin extends Document {
  bottom: number;
}

export interface InputShape extends Document {
  borderRadius: number;
  borderStyle: string;
  borderWidth: number;
}

export interface DInputSize extends Document {
  small: DInputSizeValue;
  medium: DInputSizeValue;
  large: DInputSizeValue;
}

export interface DInputSizeValue extends Document {
  label: LabelSizeValue;
  input: InputSizeValue;
}

export interface LabelSizeValue extends Document {
  fontSize: number;
  fontWeight: number;
}

export interface InputSizeValue extends Document {
  fontSize: number;
  padding: InputPadding;
}

export interface InputPadding extends Document {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface DInputType extends Document {
  default: DInputState;
}

export interface DInputState extends Document {
  normal: DInputStyle;
  focus: DInputStyle;
  disabled: DInputStyle;
  error: DInputStyle;
}

export interface DInputStyle extends Document {
  label: LabelStyle;
  input: InputStyle;
}

export interface LabelStyle extends Document {
  font: InputFont;
}

export interface InputStyle extends Document {
  font: InputFont;
  background: InputBackground;
  border: InputBorder;
}

export interface InputFont extends Document {
  type: string;
  color: string;
  shade: string;
}

export interface InputBackground extends Document {
  type: string;
  color: string;
  shade: string;
}

export interface InputBorder extends Document {
  type: string;
  color: string;
  shade: string;
}
