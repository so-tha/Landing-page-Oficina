import { useState, useCallback, useEffect } from 'react';

interface UseCarouselProps {
  totalSlides: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  loop?: boolean;
}

export const useCarousel = ({ 
  totalSlides, 
  autoPlay = false, 
  autoPlayInterval = 5000, 
  loop = true 
}: UseCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === totalSlides - 1) {
        return loop ? 0 : prevIndex;
      }
      return prevIndex + 1;
    });
  }, [totalSlides, loop]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return loop ? totalSlides - 1 : prevIndex;
      }
      return prevIndex - 1;
    });
  }, [totalSlides, loop]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentIndex(index);
    }
  }, [totalSlides]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, nextSlide]);

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    totalSlides
  };
}; 