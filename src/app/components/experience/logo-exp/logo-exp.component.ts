import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-exp',
  templateUrl: './logo-exp.component.html',
  styleUrls: ['./logo-exp.component.css']
})
export class LogoExpComponent implements OnInit {

  logo: string = "assets/Img/C.P.E.M-80.jpg"
  logoLugar: string = "Logo C.P.E.M N° 80"

  constructor() { }

  ngOnInit(): void {
  }

}
