// Category registry. Add roofing, gutters, bathrooms, siding, etc. by creating
// a data file with the same shape as window-replacement.mjs and listing it here.
import windowReplacement from './window-replacement.mjs';
import homeRemodeling from './home-remodeling.mjs';

export const categories = [windowReplacement, homeRemodeling];

// Built to the site root (index.html) as well as /<slug>/.
export const defaultCategory = 'window-replacement';
