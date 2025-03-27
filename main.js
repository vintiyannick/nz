/*
Skript für die Neuseelandreise
*/

// Karte initialisieren
let map = L.map('map').setView([-34.423889, 172.6775], 13);

// Hintergrund definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Marker zeichnen
let marker = L.marker([-34.423889, 172.6775]).addTo(map);

// Popup definieren und öffnen
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();