export interface DscButton {
  borderRadius: number;
  size: ButtonSize;
  type: ButtonType;
}

export interface ButtonSize {
  small: ButtonSizeValue;
  medium: ButtonSizeValue;
  large: ButtonSizeValue;
}

export interface ButtonSizeValue {
  fontSize: number;
  padding: ButtonPadding;
}

export interface ButtonPadding {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface ButtonType {
  default: ButtonState;
  outline: ButtonState;
  ghost: ButtonState;
}

export interface ButtonState {
  normal: ButtonStyle;
  hover: ButtonStyle;
  pressed: ButtonStyle;
  disabled: ButtonStyle;
}

export interface ButtonStyle {
  font: ButtonFont;
  background: ButtonBackground;
  border: ButtonBorder;
  boxShadows: ButtonBoxShadow[];
}

export interface ButtonFont {
  type: string;
  color: string;
  shade: string;
}

export interface ButtonBackground {
  type: string;
  color: string;
  shade: string;
}

export interface ButtonBorder {
  style: string;
  width: number;
  type: string;
  color: string;
  shade: string;
}

export interface ButtonBoxShadow {
  x: number;
  y: number;
  blur: number;
  spread: number;
  type: string;
  color: string;
  opacity: number;
}