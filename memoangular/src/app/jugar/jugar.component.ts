import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.css']
})
export class JugarComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
    var mymap = L.map('mapa').setView([19.414462, -99.050053], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',{
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
    }).addTo(mymap);

    var fieldg = L.icon({
      iconUrl: 'assets/soccerfield.png',
      // shadowUrl: 'leaf-shadow.png',
  
      iconSize:     [30, 45], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [15, 70], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
  L.marker([19.415205, -99.058325], {icon: fieldg}).addTo(mymap);
  L.marker([19.417242, -99.048802], {icon: fieldg}).addTo(mymap);
  L.marker([19.422069, -99.047826], {icon: fieldg}).addTo(mymap);
  L.marker([19.416159, -99.064123], {icon: fieldg}).addTo(mymap);
  L.marker([19.407602, -99.091479], {icon: fieldg}).addTo(mymap);
  L.marker([19.423870, -99.139981], {icon: fieldg}).addTo(mymap);
  L.marker([19.427305, -99.139112], {icon: fieldg}).addTo(mymap);
  L.marker([19.428416, -99.144430], {icon: fieldg}).addTo(mymap);
  L.marker([19.405384, -99.103212], {icon: fieldg}).addTo(mymap);
  L.marker([19.446984, -99.084207], {icon: fieldg}).addTo(mymap);
  
  
  }


}
