/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'https://npmcdn.com/'
    },
    // map tells the System loader where to look for things
    map: {
      'app': 'app', // 'dist',

      // angular bundles
      '@angular/core': 'npm:@angular/core@2.4.8/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common@2.4.8/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler@2.4.8/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser@2.4.8/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.4.8/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http@2.4.8/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router@3.4.8/bundles/router.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs@5.2.0',
      'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',

      'esri': 'https://js.arcgis.com/4.3/esri'
    },

    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);