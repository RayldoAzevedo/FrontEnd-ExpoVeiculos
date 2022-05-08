import React from 'react';
import { oneOf, bool } from 'prop-types';
import cx from 'classnames';
import './Button.css';

const cbn = 'ui-textfield';

const UITextField= ({ placeholder, name, id, value, onChange, helperText, error, fullWidth, label, theme, rounded, children, className, ...restProps }) => {
 

  return (
    <Component
      {...restProps}
      className={cx(className, cbn, `${cbn}--${theme}`, {
        [`${cbn}--rounded`]: rounded,
      })}
      placeholder={placeholder}
      name={name}
      id={id}
      value = {value}
      onChange = {onChange}
      helperText = {helperText}
      error = {error}
      fullWidth = {fullWidth}
    >
      {children}
    </Component>
  )
}

UITextField.propTypes = {
  rounded: bool,
  theme: oneOf([
    'bordered-green',
    'contained-green',
  ]),
};

export default UITextField;

