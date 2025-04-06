import classNames from 'classnames';
import React, { FC } from 'react';

import classes from './number.module.scss';
import { NumberProps } from './number.types';

export const Number: FC<NumberProps> = ({
  number,
  isDisabledText,
  isStartNumber,
  ...props
}) => {
  return (
    <div
      {...props}
      className={classNames(classes.number, {
        [classes.startNumbers]: isStartNumber,
        [classes.disabledNumber]: isDisabledText,
      })}
    >
      {number}
    </div>
  );
};
