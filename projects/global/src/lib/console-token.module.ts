import { NgModule } from '@angular/core';
import { InjectionToken } from '@angular/core';

export const CONSOLE = new InjectionToken<Console>('ConsoleToken');

export function _console(): Console {
  return console;
}

@NgModule({
  providers: [{
    provide: CONSOLE,
    useFactory: _console
  }]
})
export class ConsoleTokenModule { }
