import styles from "./index.module.scss";
import CheckboxProps from "./index.types";

const Checkbox = ({
  name,
  isChecked,
  isRadio,
  label,
  disabled,
  styling,
  termsOfUse,
  value,
  onBlurFunc,
  onClickFunc,
  onChangeFunc,
}: CheckboxProps) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.checkbox}
        id={label}
        type={isRadio ? "radio" : "checkbox"}
        checked={isChecked}
        name={name}
        disabled={disabled}
        onClick={onClickFunc}
        onChange={onChangeFunc}
        onBlur={onBlurFunc}
        value={label}
      />
      <label
        className={`${styles.label} ${styling}`}
        htmlFor={label}
        id={label}
      >
        {value ? value : label} {termsOfUse}
      </label>
    </div>
  );
};

export default Checkbox;
