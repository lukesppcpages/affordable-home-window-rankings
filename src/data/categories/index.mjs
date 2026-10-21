// Category registry. Add roofing, gutters, bathrooms, siding, etc. by creating
// a data file with the same shape as window-replacement.mjs and listing it here.
import windowReplacement from './window-replacement.mjs';
import homeRemodeling from './home-remodeling.mjs';
import windowReplacementV2 from './window-replacement-v2.mjs';

export const categories = [windowReplacement, homeRemodeling, windowReplacementV2];

// Built to the site root (index.html) as well as /<slug>/.
export const defaultCategory = 'window-replacement';
