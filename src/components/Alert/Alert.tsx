import classnames from 'classnames';
import React, { FunctionComponent } from 'react';
import { Intent } from '../../common/intent';

import styles from './Alert.module.css';

export interface Props {
  intent?: Intent;
}

export const Alert: FunctionComponent<Props> = ({ children, intent }): JSX.Element => {
  const cls = classnames(styles.alert, {
    [styles[intent ?? '']]: intent != null,
  });

  return (
    <div className={cls}>{children}</div>
  )
}
