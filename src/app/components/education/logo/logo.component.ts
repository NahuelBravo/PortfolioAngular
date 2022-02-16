import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  logo: string = "assets/Img/C.P.E.M-80.jpg"
  logoLugar: string = "Logo C.P.E.M N° 80"

  constructor() { }

  ngOnInit(): void {
  }

}
