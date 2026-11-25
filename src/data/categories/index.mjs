// Category registry. Add roofing, gutters, bathrooms, siding, etc. by creating
// a data file with the same shape as window-replacement.mjs and listing it here.
import windowReplacement from './window-replacement.mjs';
import homeRemodeling from './home-remodeling.mjs';
import windowReplacementV2 from './window-replacement-v2.mjs';
import gutterProtection from './gutter-protection.mjs';
import gutterProtectionV2 from './gutter-protection-v2.mjs';
import gutterProtectionV3 from './gutter-protection-v3.mjs';
import topGutterBrands from './top-gutter-brands.mjs';

export const categories = [windowReplacement, homeRemodeling, windowReplacementV2, gutterProtection, gutterProtectionV2, gutterProtectionV3, topGutterBrands];

// Built to the site root (index.html) as well as /<slug>/.
export const defaultCategory = 'window-replacement';
