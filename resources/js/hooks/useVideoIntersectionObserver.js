import { useEffect, useRef } from 'react';

// Custom Hook for managing video play/pause based on visibility
export function useVideoIntersectionObserver() {

  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Callback for Intersection Observer
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return videoRef;
}
