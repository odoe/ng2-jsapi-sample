import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [`
        section {
            width: 100%;
            margin: 0 auto;
            padding: 4em 0 0 0;
        }
        `],
    template: `
        <main>
            <section>
                <esri-scene-view></esri-scene-view>
            </section>
        </main>
        `
})
export class AppComponent { }