export interface InputToken {
  id: string;
  project_id: string;
  shape: DInputShape;
  sizes: DInputSize;
  types: DInputType;
}

export interface DInputShape {
  label: LabelShape;
  input: InputShape;
}

export interface LabelShape {
  margin: LabelMargin;
}

export interface LabelMargin {
  bottom: number;
}

export interface InputShape {
  borderRadius: number;
  borderStyle: string;
  borderWidth: number;
}

export interface DInputSize {
  small: DInputSizeValue;
  medium: DInputSizeValue;
  large: DInputSizeValue;
}

export interface DInputSizeValue {
  label: LabelSizeValue;
  input: InputSizeValue;
}

export interface LabelSizeValue {
  fontSize: number;
  fontWeight: number;
}

export interface InputSizeValue {
  fontSize: number;
  padding: InputPadding;
}

export interface InputPadding {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface DInputType {
  default: DInputState;
}

export interface DInputState {
  normal: DInputStyle;
  focus: DInputStyle;
  disabled: DInputStyle;
  error: DInputStyle;
}

export interface DInputStyle {
  mainColor: string;
  label: LabelStyle;
  input: InputStyle;
}

export interface LabelStyle {
  font: InputFont;
}

export interface InputStyle {
  font: InputFont;
  background: InputBackground;
  border: InputBorder;
}

export interface InputFont {
  type: string;
  color: string;
  shade: string;
}

export interface InputBackground {
  type: string;
  color: string;
  shade: string;
}

export interface InputBorder {
  type: string;
  color: string;
  shade: string;
}
