import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '05-pipesApp';

  constructor( private _primengConfig: PrimeNGConfig ) {}

  ngOnInit() {
    this._primengConfig.ripple = true;
  }

}
