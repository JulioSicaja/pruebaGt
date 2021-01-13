// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyA1Qf0G3F0NEkkK4KUkgT44DasuxSVJ50Q",
    authDomain: "pruebagt.firebaseapp.com",
    projectId: "pruebagt",
    storageBucket: "pruebagt.appspot.com",
    messagingSenderId: "396270216955",
    appId: "1:396270216955:web:27d930255b8fa175ffb25e",
    measurementId: "G-H0MW353FVS"
  },
  options : {
    "method": "GET",
    "hostname": "restcountries-v1.p.rapidapi.com",
    "port": null,
    "path": "/all",
    "headers": {
      "x-rapidapi-key": "cd47a0b8eemsh03aa7a5207d932ap1d4be3jsn25d0e6187907",
      "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
      "useQueryString": true
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
