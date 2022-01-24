import SkeletonLoader from 'modules/shared/components/Skeleton/Skeleton';
import React from 'react';
import styles from './HeaderDetails.module.scss';

type HeaderDetails = {
  isLoading: boolean;
  name?: string;
  nickname?: string;
  deads?: number | null;
};

const HeaderDetails = ({ isLoading, name, nickname, deads }: HeaderDetails) => {
  const deadsValue = deads ?? 0;
  return (
    <div className={styles.characterDetail__header}>
      <div className={styles.characterDetail__titles}>
        <h1 className={styles.characterDetail__name}>{isLoading ? <SkeletonLoader /> : name}</h1>
        <p className={styles.characterDetail__nickname}>
          {isLoading ? <SkeletonLoader /> : nickname}
        </p>
      </div>
      {
        <div className={styles.characterDetail__deaths}>
          {isLoading ? <SkeletonLoader /> : deadsValue}
        </div>
      }
    </div>
  );
};

export default HeaderDetails;
