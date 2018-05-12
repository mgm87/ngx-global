import { Component, Inject } from '@angular/core';
import { CONSOLE } from 'ngx-global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(@Inject(CONSOLE) private _console) {
    this._console.log('This was logged through the injectable console!');
  }
}
