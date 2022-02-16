import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  lugar: string = "C.P.E.M. N° 80";
  tituloCarrera: string = "Tecnico en Gestion de Proyectos Audiovisuales";
  anios: string = "2017-2019";

  constructor() { }

  ngOnInit(): void {
  }

}
