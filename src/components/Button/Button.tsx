import React, { ComponentProps } from 'react';
import classnames from 'classnames';

import styles from './Button.module.css';
import { Intent } from '../../common/intent';
import { Size } from '../../common/size';

export interface Props extends ComponentProps<'button'> {
  className?: string;
  intent?: Intent;
  size?: Size;
  label: string;
}

export const Button = ({
  className,
  intent,
  size,
  label,
  ...props
}: Props): JSX.Element => {
  const cls = classnames(styles.button, className, {
    [styles[intent ?? '']]: intent != null,
    [styles[size ?? '']]: size != null,
  });

  return (
    <button
      type="button"
      className={cls}
      {...props}
    >
      {label}
    </button>
  );
};
