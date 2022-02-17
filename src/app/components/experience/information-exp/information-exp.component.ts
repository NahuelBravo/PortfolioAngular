import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-exp',
  templateUrl: './information-exp.component.html',
  styleUrls: ['./information-exp.component.css']
})
export class InformationExpComponent implements OnInit {

  lugar: string = "lugar de trabajo";
  puesto: string = "Fullstack Developer";
  anios: string = "2021-presente";

  constructor() { }

  ngOnInit(): void {
  }

}
