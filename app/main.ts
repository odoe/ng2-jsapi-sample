import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule }     from "@angular/http";

import { EsriSceneViewComponent } from "./map.component";
import { AppComponent } from "./app.component"
import { SimpleMapService } from "./map.services";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        EsriSceneViewComponent
    ],
    providers: [
        SimpleMapService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);