import SkeletonLoader from 'modules/shared/components/Skeleton/Skeleton';
import React from 'react';
import cn from 'classnames';
import styles from './Quote.module.scss';

type Quote = {
  text: string | undefined | null;
  isLoading?: boolean;
  className?: string;
};

const Quote = ({ text, isLoading, className }: Quote) => {
  if (!isLoading && !text) return <></>;
  return (
    <div className={cn(styles.quote, className, isLoading ? styles.noQuote : '')}>
      {isLoading ? <SkeletonLoader /> : text}
    </div>
  );
};

export default Quote;
