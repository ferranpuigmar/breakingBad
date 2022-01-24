import { MutableRefObject, useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (ref: MutableRefObject<Element | null>) => {
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState<Element | null>(null);

  const observer = useRef<null | IntersectionObserver>(null);

  const cleanOb = () => {
    if (observer.current) {
      observer.current.disconnect();
    }
  };

  useEffect(() => {
    setElement(ref.current);
  }, [ref]);

  useEffect(() => {
    if (!element) return;
    const ob = (observer.current = new IntersectionObserver(([entry]) => {
      const isElementIntersecting = entry.isIntersecting;
      setIsVisible(isElementIntersecting);
    }));
    ob.observe(element);

    return () => {
      cleanOb();
    };
  }, [element]);

  return isVisible;
};
