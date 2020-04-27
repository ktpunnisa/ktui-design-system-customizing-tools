import { Document } from 'mongoose';

export interface LinkToken extends Document {
  id: string;
  project_id: string;
  sizes: LinkSize;
  types: LinkType;
}

export interface LinkSize extends Document {
  small: LinkSizeValue;
  medium: LinkSizeValue;
  large: LinkSizeValue;
}

export interface LinkSizeValue extends Document {
  fontSize: number;
}

export interface LinkType extends Document {
  default: LinkState;
  nav: LinkState;
}

export interface LinkState extends Document {
  normal: LinkStyle;
  hover: LinkStyle;
  pressed: LinkStyle;
}

export interface LinkStyle extends Document {
  font: LinkFont;
  textDecoration: string;
}

export interface LinkFont extends Document {
  type: string;
  color: string;
  shade: string;
}
