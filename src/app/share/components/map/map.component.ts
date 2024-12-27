import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LeafletMouseEvent, Marker, MarkerOptions, icon, latLng, marker, tileLayer } from 'leaflet';
import {LeafletModule} from '@bluehalo/ngx-leaflet';
import { Coordinate } from './coordinate';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{
  ngOnInit(): void {
    this.mapLayers = this.initCoordinates.map(value => {
      const currentMarker = marker([value.latitude,value.length], this.markerOptions);
      return currentMarker;
    });
  }

  @Input()
  initCoordinates: Coordinate[] = [];

  @Output()
  selectedCoordinate = new EventEmitter<Coordinate>();

  markerOptions:MarkerOptions = {
    icon: icon({
      iconSize:[25,41],
      iconAnchor:[13,41],
      iconUrl:'assets/marker-icon.png',
      iconRetinaUrl:'assets/marker-icon-2x.png',
      shadowUrl:'assets/marker-shadow.png'
    })
  }
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        maxZoom: 18,
        attribution: '...'
      })
    ],
    zoom:14,
    center:latLng(25.91389309324729,-80.31014493714162)
  }
   mapLayers: Marker<any>[] = [];

  handleClick(event:LeafletMouseEvent){

    const latitude = event.latlng.lat;
    const length = event.latlng.lng;

    this.mapLayers = [];
    this.mapLayers.push(marker([latitude,length], this.markerOptions));
    this.selectedCoordinate.emit({latitude,length});

  }

}
