// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  personUrl: 'http://localhost:8081/person',
  educationUrl: 'http://localhost:8081/education',
  authUrl: 'http://localhost:8081/auth/',
  projectUrl: 'http://localhost:8081/projects',
  skillUrl:  'http://localhost:8081/skill',
  experienceUrl: 'http://localhost:8081/experience',
  imageUrl:'http://localhost:8081/upload/'


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
