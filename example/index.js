import $ from 'jquery';
import mapboxgl from 'mapbox-gl';
import MapboxAreaSwitcherControl from '../dist/index';
import '../css/styles.css';

$(function(){
    const map = new mapboxgl.Map({
        container: 'map',
        // style: 'mapbox://styles/mapbox/streets-v11',
        style:'https://narwassco.github.io/mapbox-stylefiles/unvt/style.json',
        center: [35.87063, -1.08551],
        zoom: 12,
        hash:true,
    });
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    map.addControl(new MapboxAreaSwitcherControl([
        {title: 'Narok',latlng: [35.87063, -1.08551],zoom: 14,}, 
        {title: "Ololulung'a",latlng: [35.65072, -1.0085],zoom: 13}, 
        {title: "Kilgoris",latlng: [34.87533, -1.00278],zoom: 14}, 
        {title: "Suswa",latlng: [36.33078, -1.05307],zoom: 13}
    ], 5), 'top-right');

    map.addControl(new MapboxAreaSwitcherControl([
        {title: 'Narok',latlng: [35.87063, -1.08551],zoom: 14,}, 
        {title: "Ololulung'a",latlng: [35.65072, -1.0085],zoom: 13}, 
        {title: "Kilgoris",latlng: [34.87533, -1.00278],zoom: 14}, 
        {title: "Suswa",latlng: [36.33078, -1.05307],zoom: 13}
    ], 3), 'top-right');
})