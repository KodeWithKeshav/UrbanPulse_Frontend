// Keyless OpenStreetMap-based basemap for every Leaflet map in the app.
// CARTO Voyager (OSM data) is the default: free, no API key, Google-like styling.
// Override with VITE_MAP_TILE_URL / VITE_MAP_TILE_ATTRIBUTION (e.g. a MapTiler
// or Stadia URL with your own key) if traffic outgrows the free tier.
const DEFAULT_TILE_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
const DEFAULT_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'

export const BASEMAP = {
  url: import.meta.env.VITE_MAP_TILE_URL || DEFAULT_TILE_URL,
  attribution: import.meta.env.VITE_MAP_TILE_ATTRIBUTION || DEFAULT_ATTRIBUTION,
  subdomains: 'abcd',
  maxZoom: 20,
}
