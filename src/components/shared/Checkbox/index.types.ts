export default interface CheckboxProps {
  name?: string;
  isChecked?: boolean;
  isRadio?: boolean;
  label?: string;
  disabled?: boolean;
  styling?: any;
  termsOfUse?: any;
  value?: any;
  onBlurFunc?: (event: any) => void;
  onClickFunc?: (event: any) => void;
  onChangeFunc?: (event: any) => void;
}
