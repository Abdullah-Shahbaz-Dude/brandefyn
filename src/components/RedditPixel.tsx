import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initRedditPixel, trackRedditEvent } from '../utils/redditPixel';

/**
 * Initializes the Reddit Ads pixel once, then fires PageVisit on every route change
 * so each SPA "page" is reported to Reddit (not only on full reload).
 */
export default function RedditPixel() {
  const location = useLocation();

  useEffect(() => {
    initRedditPixel();
  }, []);

  useEffect(() => {
    trackRedditEvent('PageVisit');
  }, [location.pathname]);

  return null;
}
