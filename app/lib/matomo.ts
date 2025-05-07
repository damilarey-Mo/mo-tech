import { createInstance } from '@datapunt/matomo-tracker-react';

const matomoInstance = createInstance({
  urlBase: 'https://teamo.matomo.cloud', // no trailing slash
  siteId: 1,
  trackerUrl: 'https://teamo.matomo.cloud/matomo.php',
  srcUrl: 'https://cdn.matomo.cloud/teamo.matomo.cloud/matomo.js',
  // Optional: Add additional configuration
  configurations: {
    setCookieDomain: '*.teamo-five.vercel.app',
    setDoNotTrack: true,
    enableLinkTracking: true,
  },
});

export default matomoInstance; 