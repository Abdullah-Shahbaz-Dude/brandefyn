import { useCountUp } from '../../hooks/useCountUp';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
}

export default function AnimatedCounter({
  end,
  suffix = '',
  duration = 2000,
  decimals = 0,
}: AnimatedCounterProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
  });
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [prevIntersecting, setPrevIntersecting] = useState(false);
  
  // Reset animation when entering viewport
  useEffect(() => {
    if (isIntersecting && !prevIntersecting) {
      // Just entered viewport - start animation
      setShouldAnimate(true);
    } else if (!isIntersecting && prevIntersecting) {
      // Just left viewport - reset for next time
      setShouldAnimate(false);
    }
    setPrevIntersecting(isIntersecting);
  }, [isIntersecting, prevIntersecting]);
  
  const count = useCountUp(end, duration, 0, shouldAnimate);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(decimals) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(decimals) + 'K';
    }
    return num.toFixed(decimals);
  };

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {formatNumber(count)}{suffix}
    </span>
  );
}
