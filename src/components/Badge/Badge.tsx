import React from 'react';
import classnames from 'classnames';

import styles from './Badge.module.css';
import { Intent } from '../../common/intent';

export interface Props {
  intent?: Intent;
  pill?: boolean;
}

export const Badge: React.FC<Props> = ({
  intent,
  pill = false,
  children,
}): JSX.Element => {
  const cls = classnames(styles.badge, {
    [styles[intent ?? '']]: intent != null,
    [styles.pill]: pill,
  });

  return <div className={cls}>{children}</div>;
};
