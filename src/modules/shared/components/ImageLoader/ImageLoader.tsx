import { useIntersectionObserver } from 'hooks/useIntersectionObserver';
import React, { useEffect, useRef, useState } from 'react';
import styles from './ImageLoader.module.scss';
import { ReactComponent as Placeholder } from 'assets/images/placeholder.svg';
import cn from 'classnames';

type ImageLoader = {
  url: string | undefined;
  title: string | undefined;
  alt: string | undefined;
  className?: string;
};

const ImageLoader = ({ url, title, alt, className }: ImageLoader) => {
  const [imageUrl, setImageUrl] = useState<string>();
  const [error, setError] = useState<boolean>(false);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const refImg = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(refImg);
  const isLoaded = useRef<boolean>(false);

  const handleErrorImage = () => {
    setError(true);
  };

  const handleLoadImage = () => {
    const img = new Image();
    img.onload = () => {
      setImageUrl(img.src);
    };
    img.onerror = () => {
      handleErrorImage();
    };
    img.src = url as string;
  };

  useEffect(() => {
    if (isVisible && !isLoaded.current) {
      setIsLoad(true);
      isLoaded.current = true;
    }
  }, [isVisible, isLoaded]);

  useEffect(() => {
    if (isLoad && url) {
      handleLoadImage();
    }
  }, [imageUrl, isLoad, url]);

  return (
    <div ref={refImg} className={cn('imageLoader', styles.imageLoader, className)}>
      {!url || error || !imageUrl ? (
        <Placeholder />
      ) : (
        <img src={imageUrl} title={title ?? ''} alt={alt ?? ''} />
      )}
    </div>
  );
};

export default ImageLoader;
