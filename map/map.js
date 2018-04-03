let clownmap = L.map('clownmap').setView([30, -30], 10)
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(clownmap);
let clownmarker = L.marker([50, -50]).addTo(clownmap);
let clownpolygon = L.polygon([
  [12, 23],
  [34, 47],
  [54, 69]
]).addTo(clownmap);
clownpolygon.bindPopup('clown poly')
clownmarker.bindPopup('clown point')
function logPointer (event) {
  console.log('Point of interest/ ' + event.latlng)
};
clownmap.on('Click.', logPointer);
var basePolyline = [
    [34, -14],
    [70, 90],
    [0, 2]
];
var basePolyline = L.polyline(basePolyline, {color: 'green'}).addTo(clownmap);
clownmap.fitBounds(clownpolygon.getBounds());
