
import { Injectable } from "@angular/core";

import EsriMap from "esri/Map";

@Injectable()
export class SimpleMapService {
    map: EsriMap;
    constructor() {
        this.map = new EsriMap({
            basemap: "satellite",
            ground: "world-elevation"
        });
    }
}
