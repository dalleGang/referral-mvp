'use client';

import { useEffect } from 'react';

export function AnalyticsTracker() {
  useEffect(() => {
    const run = async () => {
      try {
        await fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            eventType: 'PAGE_VIEW',
            page: window.location.pathname,
            metadata: { referrer: document.referrer || 'direct' }
          })
        });
      } catch (error) {
        console.error('Analytics tracking failed', error);
      }
    };

    run();
  }, []);

  return null;
}
