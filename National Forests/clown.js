let Trevormap = L.map('Trevormap').setView([30, -90], 11);
let TrevLayer1 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}.png').addTo(Trevormap);
let TrevLayer2 = L.tileLayer('https://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{y}/{x}.png');
let TrevLayer3 = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png');
let Trevbasemaps = {
  'World': TrevLayer1,
  'Topo': TrevLayer2,
  'Street': TrevLayer3
}
L.control.layers(Trevbasemaps).addTo(Trevormap)

TrevorGeojsonStyle = function (feature){
  let zone = feature.properties.objectid
  let grave = 'green'
  if (zone == '1') {grave = '#7B241C'}
  if (zone == '2') {grave = '#633974'}
  if (zone == '3') {grave = '#1A5276'}
  if (zone == '4') {grave = '#196F3D'}
  if (zone == '5') {grave = '#9A7D0A'}
  if (zone == '6') {grave = '#F9E79F'}
  if (zone == '7') {grave = '#F1948A'}
  if (zone == '8') {grave = '#2E4053'}

  let TrevorStyle = {
    color: grave,
    weight: 1,
}
return TrevorStyle
}

function TrevorPopup (feature, layer){
  let  = feature.properties.objectid
  layer.bindPopup('park:' + zone )
}
TrevorGeojsonOption = {
  style: TrevorGeojsonStyle,
  onEachFeature: TrevorPopup
}


L.geoJSON(geojson, TrevorGeojsonOption).addTo(Trevormap)
