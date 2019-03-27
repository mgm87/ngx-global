# ngx-global
This project is intended to provide the global JS objects as injectables for Angular. The objects currently available are: window, console, and document. Document is provided by Angular.

Mocking these objects simplifys testing and follows the Angular way to do things.

Create an issue if there is an additional object you would like to see included in the library.

## Usage
```ts
// sample.module.ts
import { NgModule, InjectionToken } from '@angular/core';
import { ConsoleTokenModule } from 'ngx-token'

@NgModule({
  declarations: [SampleComponent],
  exports: [],
  imports: [
    ConsoleTokenModule
  ],
  providers: [],
  bootstrap: [SampleComponent]
})
export class SampleModule {};
```

```ts
import { Injectable } from '@angular/core';
import { CONSOLE } from 'ngx-token';

@Injectable()
export class UrlService {
  constructor(@Inject(CONSOLE) private _console) {}
}

logSomething() {
  this._console.log('Something');
}
```