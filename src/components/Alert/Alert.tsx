import classnames from 'classnames';
import React from 'react';
import { Intent } from '../../common/intent';

import styles from './Alert.module.css';

export interface Props {
  className?: string;
  intent?: Intent;
}

export const Alert: React.FC<Props> = ({ className, children, intent }): JSX.Element => {
  const cls = classnames(styles.alert, className, {
    [styles[intent ?? ""]]: intent != null,
  });

  return (
    <div className={cls}>{children}</div>
  )
}
