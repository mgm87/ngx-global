import { NgModule } from '@angular/core';
import { InjectionToken } from '@angular/core';

export const DOCUMENT = new InjectionToken<Document>('DocumentToken');

export function _document(): Document {
  return document;
}

@NgModule({
  providers: [{
    provide: DOCUMENT,
    useFactory: _document
  }]
})
export class DocumentTokenModule { }
