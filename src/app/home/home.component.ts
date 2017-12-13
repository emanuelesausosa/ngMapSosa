import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lat = 14.0836991;
  lng = -87.1765747;

  positions: Position[];
  positionCount = 0;

  constructor(public data: DataService) { }

  ngOnInit() {

    setInterval(() => {
      this.data.getPositions().subscribe((res) => {
        this.positions = res;
        this.positionCount = res.length;
      });
    }, 5000);
  }

}
