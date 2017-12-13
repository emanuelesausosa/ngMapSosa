import { Component } from '@angular/core';
import { DataService } from './services/data.service';
declare const google;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*title = 'My first  AGM project';
  lat = 14.0836991;
  lng = -87.1765747;*/

  // positions: Position[];

  // constructor (public data: DataService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  /* ngOnInit() {
    this.data.getPositions().subscribe((res) => {
      this.positions = res;
    });
  } */
}
