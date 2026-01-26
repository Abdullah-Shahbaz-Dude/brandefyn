import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollRestoration() {
  const { pathname } = useLocation();
  const scrollPositions = useRef<Record<string, number>>({});
  const previousPathname = useRef<string>(pathname);
  const isInitialMount = useRef(true);
  const isBackForward = useRef(false);

  useEffect(() => {
    // Listen for popstate (back/forward navigation)
    const handlePopState = () => {
      isBackForward.current = true;
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    // If it's a back/forward navigation, restore scroll position
    if (isBackForward.current && !isInitialMount.current) {
      const savedPosition = scrollPositions.current[pathname];
      if (savedPosition !== undefined) {
        // Use requestAnimationFrame to ensure DOM is ready after React Router updates
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            window.scrollTo({
              top: savedPosition,
              behavior: 'smooth',
            });
          });
        });
      }
      isBackForward.current = false;
      previousPathname.current = pathname;
      return;
    }

    // New navigation - scroll to top smoothly (but not on initial mount)
    if (!isInitialMount.current && previousPathname.current !== pathname) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    isInitialMount.current = false;
    previousPathname.current = pathname;

    // Save scroll position on scroll
    const handleScroll = () => {
      scrollPositions.current[pathname] = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Save scroll position before leaving
      scrollPositions.current[pathname] = window.scrollY;
    };
  }, [pathname]);

  return null;
}
