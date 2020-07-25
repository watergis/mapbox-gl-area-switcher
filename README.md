# mapbox-gl-popup
![](https://github.com/watergis/mapbox-gl-area-switcher/workflows/Node.js%20Package/badge.svg)
![GitHub](https://img.shields.io/github/license/watergis/mapbox-gl-area-switcher)

This module adds area switcher control which is able to change locations of area to mapbox-gl

## Installation:

```bash
npm i @watergis/mapbox-gl-area-switcher --save
```

## Demo:

See [demo](https://watergis.github.io/mapbox-gl-area-switcher/#12/-1.08551/35.87063).

## Test:

```
npm run build
npm start
```

open [http://localhost:8080](http://localhost:8080).

## Usage:

```ts
import MapboxAreaSwitcherControl from "@watergis/mapbox-gl-area-switcher";
import { Map as MapboxMap } from "mapbox-gl";

import "@watergis/mapbox-gl-area-switcher/css/styles.css";

const map = new MapboxMap();
map.addControl(new MapboxAreaSwitcherControl([
        {title: 'Narok',latlng: [35.87063, -1.08551],zoom: 14,}, 
        {title: "Ololulung'a",latlng: [35.65072, -1.0085],zoom: 13}, 
        {title: "Kilgoris",latlng: [34.87533, -1.00278],zoom: 14}, 
        {title: "Suswa",latlng: [36.33078, -1.05307],zoom: 13}
]), 'top-right');
```

Specify your areas which you want to change the location quickly by the control.

If number of areas is more than 5, the control will become select box in order to avoid the control become too long. The default limit number of areas can be changed in the second parameter. You may change as below.

```ts
map.addControl(new MapboxAreaSwitcherControl([
        {title: 'Narok',latlng: [35.87063, -1.08551],zoom: 14,}, 
        {title: "Ololulung'a",latlng: [35.65072, -1.0085],zoom: 13}, 
        {title: "Kilgoris",latlng: [34.87533, -1.00278],zoom: 14}, 
        {title: "Suswa",latlng: [36.33078, -1.05307],zoom: 13}
], 3), 'top-right');
```
