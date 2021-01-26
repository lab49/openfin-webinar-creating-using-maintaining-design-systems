import React, { ComponentProps } from 'react';
import classnames from 'classnames';

import styles from './Button.module.css';

export const Intent = {
  None: undefined,
  Primary: 'primary',
  Secondary: 'secondary',
  Warning: 'warning',
  Success: 'success',
  Danger: 'danger',
} as const;

type Intent = typeof Intent[keyof typeof Intent];

export const Size = {
  None: undefined,
  Small: 'small',
  Large: 'large',
} as const;

type Size = typeof Size[keyof typeof Size];


export interface Props extends ComponentProps<'button'> {
  intent?: Intent;
  size?: Size;
  label: string;
}

export const Button = ({
  intent,
  size,
  label,
  ...props
}: Props): JSX.Element => {
  const cls = classnames(styles.button, {
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
