// Shared service metadata. Brands list service ids in `services`; labels and
// order come from here so every category page presents them consistently.
export const SERVICES = {
  windows: { label: 'Windows' },
  roofing: { label: 'Roofing' },
  siding: { label: 'Siding' },
  doors: { label: 'Doors' },
  gutters: { label: 'Gutters' },
  baths: { label: 'Baths' },
  insulation: { label: 'Insulation' },
};

export const serviceLabels = (ids = []) =>
  Object.keys(SERVICES).filter((id) => ids.includes(id)).map((id) => SERVICES[id].label);
