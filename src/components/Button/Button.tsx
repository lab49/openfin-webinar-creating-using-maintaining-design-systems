import React from 'react';
import classnames from 'classnames';

import styles from './Button.module.css';

export interface Props {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size,
  backgroundColor,
  label,
  ...props
}: Props): JSX.Element => {
  const cls = classnames(styles.button, {
    [styles.primary]: primary,
    [styles[size ?? '']]: size != null,
  });

  return (
    <button
      type="button"
      className={cls}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
