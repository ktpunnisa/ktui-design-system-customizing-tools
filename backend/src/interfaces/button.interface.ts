import { Document } from 'mongoose';

export interface ButtonToken extends Document {
  id: string;
  project_id: string;
  shape: ButtonShape;
  sizes: ButtonSize;
  types: ButtonType;
}

export interface ButtonShape extends Document {
  borderRadius: number;
  borderStyle: string;
  borderWidth: number;
}

export interface ButtonSize extends Document {
  small: ButtonSizeValue;
  medium: ButtonSizeValue;
  large: ButtonSizeValue;
}

export interface ButtonSizeValue extends Document {
  fontSize: number;
  padding: ButtonPadding;
}

export interface ButtonPadding extends Document {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface ButtonType extends Document {
  default: ButtonState;
  outline: ButtonState;
  ghost: ButtonState;
}

export interface ButtonState extends Document {
  normal: ButtonStyle;
  hover: ButtonStyle;
  pressed: ButtonStyle;
  disabled: ButtonStyle;
}

export interface ButtonStyle extends Document {
  font: ButtonFont;
  background: ButtonBackground;
  border: ButtonBorder;
  boxShadows: ButtonBoxShadow[];
}

export interface ButtonFont extends Document {
  type: string;
  color: string;
  shade: string;
}

export interface ButtonBackground extends Document {
  type: string;
  color: string;
  shade: string;
}

export interface ButtonBorder extends Document {
  type: string;
  color: string;
  shade: string;
}

export interface ButtonBoxShadow extends Document {
  x: number;
  y: number;
  blur: number;
  spread: number;
  type: string;
  color: string;
  opacity: number;
}
