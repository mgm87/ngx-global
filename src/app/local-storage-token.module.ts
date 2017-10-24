import { NgModule } from '@angular/core';
import { InjectionToken } from '@angular/core';

export const LOCAL_STORAGE = new InjectionToken<Storage>('LocalStorageToken');

export function _localStorage(): Storage {
  return localStorage;
}

@NgModule({
  providers: [{
    provide: LOCAL_STORAGE,
    useFactory: _localStorage
  }]
})
export class LocalStorageTokenModule { }