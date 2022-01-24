import SkeletonLoader from 'modules/shared/components/Skeleton/Skeleton';
import React from 'react';
import DeathCounter from '../DeathCounter/DeathCounter';
import cn from 'classnames';
import styles from './CharacterHeaderDetails.module.scss';

type CharacterHeaderDetails = {
  isLoading: boolean;
  name?: string;
  nickname?: string;
  deaths?: number | null;
  className?: string;
};

const CharacterHeaderDetails = ({
  isLoading,
  name,
  nickname,
  deaths,
  className
}: CharacterHeaderDetails) => {
  const deathsValue = deaths ?? 0;
  return (
    <div className={cn(styles.characterHeaderDetail, className)}>
      <div className={styles.characterHeaderDetail__titles}>
        <h1 className={styles.characterHeaderDetail__name}>
          {isLoading ? <SkeletonLoader /> : name}
        </h1>
        <p className={styles.characterHeaderDetail__nickname}>
          {isLoading ? <SkeletonLoader /> : nickname ? `aka ${nickname}` : ''}
        </p>
      </div>
      <div className={styles.characterHeaderDetail__deaths}>
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <DeathCounter
            className={styles.characterHeaderDetail__deathCounter}
            deaths={deathsValue}
          />
        )}
      </div>
    </div>
  );
};

export default CharacterHeaderDetails;
