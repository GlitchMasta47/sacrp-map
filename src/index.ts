import 'leaflet/dist/leaflet.css'
import L, { LatLngBoundsExpression } from 'leaflet';

let map = L.map('map', {
  crs: L.CRS.Simple,
  zoomSnap: 0.5,
  zoomDelta: 0.5,
  minZoom: -3,
  maxZoom: 1
});

let mapBounds: LatLngBoundsExpression = [ [0, 0], [8196, 8196] ];
let image = L.imageOverlay(new URL('map.png', import.meta.url).toString(), mapBounds, {
  attribution: 'Map image by: <a target="_blank" href="https://forum.cfx.re/t/release-postal-code-map-minimap-new-improved-v1-2/147458">Virus_City on Cfx.re community</a>'
}).addTo(map);

map.fitBounds(mapBounds);

window.map = map