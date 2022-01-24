import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type SkeletonLoader = {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
};

const SkeletonLoader = ({ width = '100%', height = '100%', borderRadius = 4 }: SkeletonLoader) => {
  return (
    <SkeletonTheme direction="ltr" enableAnimation={true}>
      <Skeleton width={width} height={height} borderRadius={borderRadius} />
    </SkeletonTheme>
  );
};

export default SkeletonLoader;
