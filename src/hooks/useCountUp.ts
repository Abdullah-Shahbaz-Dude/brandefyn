import { useEffect, useState } from 'react';

export function useCountUp(
  end: number,
  duration: number = 2000,
  start: number = 0,
  enabled: boolean = true
) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!enabled) {
      // Reset to start when disabled (element left viewport)
      setCount(start);
      return;
    }

    // Reset to start when enabled (element entered viewport)
    setCount(start);
    
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(start + (end - start) * easeOutQuart));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start, enabled]);

  return count;
}


