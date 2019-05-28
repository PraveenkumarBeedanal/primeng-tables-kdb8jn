import { Component } from '@angular/core';

export interface Car {
    vin;
    year;
    brand;
    color;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  cars =[{}]
}
