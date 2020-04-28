export interface LinkToken {
  sizes: LinkSize;
  types: LinkType;
}

export interface LinkSize {
  small: LinkSizeValue;
  medium: LinkSizeValue;
  large: LinkSizeValue;
}

export interface LinkSizeValue {
  fontSize: number;
  fontWeight: number;
}

export interface LinkType {
  default: LinkState;
  nav: LinkState;
}

export interface LinkState {
  normal: LinkStyle;
  hover: LinkStyle;
  pressed: LinkStyle;
}

export interface LinkStyle {
  font: LinkFont;
  textDecoration: string;
}

export interface LinkFont {
  type: string;
  color: string;
  shade: string;
}
