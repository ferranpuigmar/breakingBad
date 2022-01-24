import SkeletonLoader from 'modules/shared/components/Skeleton/Skeleton';
import React from 'react';
import styles from './LabelInfo.module.scss';

type LabelInfo = {
  title: string | undefined;
  text: string | string[] | undefined;
  isLoading?: boolean;
};

const LabelInfo = ({ title, text, isLoading }: LabelInfo) => {
  if ((!isLoading && !text && !title) || text === '') return <></>;

  const textValue = text ?? '';
  return (
    <dl className={styles.labelInfo}>
      <dt>{isLoading ? <SkeletonLoader /> : title}</dt>
      <dd>{isLoading ? <SkeletonLoader /> : textValue}</dd>
    </dl>
  );
};

export default LabelInfo;
