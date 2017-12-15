
var mymap = L.map('mapid').setView([43.4833, -1.4833], 11,{
    scrollWheelZoom: false
});

mymap.scrollWheelZoom.disable();
mymap.dragging.disable();

var circle = L.circle([43.4833, -1.4833], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.1,
    radius: 10000
}).addTo(mymap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    scrollWheelZoom: false,
    dragging: false,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYW1hcnQiLCJhIjoiY2piMmxrNHFzODI1ZjMzcWV4dDU5MGYzMyJ9.p5GbvHkg9GoAQJ_gm1upqg'
}).addTo(mymap);

// map.scrollWheelZoom.disable()
// scrollWheelZoom: false