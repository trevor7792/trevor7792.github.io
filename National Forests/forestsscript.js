let Trevormap = L.map('Trevormap').setView([30, -90], 5);
let TrevLayer1 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}.png').addTo(Trevormap);
let TrevLayer2 = L.tileLayer('https://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{y}/{x}.png');
let TrevLayer3 = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png');
let Trevbasemaps = {
  'World': TrevLayer1,
  'Topo': TrevLayer2,
  'Street': TrevLayer3
}
L.control.layers(Trevbasemaps).addTo(Trevormap)


function style (feature) {
  let zone = feature.properties.FORESTNAME
  let color = 'green'
  if (zone == 'Uwharrie National Forest') {color = '#7B241C'}
  if (zone == 'Ocala National Forest') {color = '#633974'}
  if (zone == 'Ozark National Forest') {color = '#1A5276'}
  if (zone == 'De Soto National Forest') {color = '#196F3D'}
  if (zone == 'Sam Houston National Forest') {color = '#9A7D0A'}
  if (zone == 'Cherokee National Forest') {color = '#F9E79F'}
  if (zone == 'Davy Crockett National Forest') {color = '#F1948A'}
  if (zone == 'Chattahoochee National Forest') {color = '#2E4053'}
  if (zone == 'Ouachita National Forest') {color = '#F9E79F'}
  if (zone == 'Talladega National Forest') {color = '#F1948A'}

  let style = {
    color: color,
    weight: 1,
}
return style
}

function createCirlces (feature, latlng) {
  return L.circleMarker(latlng, style)
}

let TrevorGeojsonOption = {
  style: style,
  pointToLayer: createCirlces,
  onEachFeature: TrevorPopup
}

function TrevorPopup (feature, layer){
  let  = feature.properties.FORESTNAME
  layer.bindPopup('park:' + zone )
}


L.geoJSON(geojsonmy, TrevorGeojsonOption).addTo(Trevormap)
