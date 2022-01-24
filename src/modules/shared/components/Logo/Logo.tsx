import React from 'react';
import { ReactComponent as LogoBreakingBad } from 'assets/images/breaking-bad-logo.svg';
import cn from 'classnames';
import styles from './Logo.module.scss';

const Logo = () => {
  return <LogoBreakingBad className={cn('logo', styles.logoSvg)} />;
};

export default Logo;
