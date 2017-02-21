
import { Component, ElementRef, Input, Output, EventEmitter } from "@angular/core";
import SceneView from "esri/views/SceneView";
import { SimpleMapService } from "./map.services";

@Component({
    selector: "esri-scene-view",
    template: `<div id="viewDiv" style="height:600px"><ng-content></ng-content></div>`,
    providers: [SimpleMapService]
})
export class EsriSceneViewComponent {
    @Output() viewCreated = new EventEmitter();

    view: any = null;

    constructor(
        private _mapService: SimpleMapService,
        private elRef: ElementRef
    ) {}

    ngOnInit() {
        this.view = new SceneView({
            container: this.elRef.nativeElement.firstChild,
            map: this._mapService.map,
            camera: {
                position: {
                x: -9177356,
                y: 4246783,
                z: 723,
                spatialReference: {
                    wkid: 3857
                }
                },
                heading: 0,
                tilt: 83
            }
        })
    }
}