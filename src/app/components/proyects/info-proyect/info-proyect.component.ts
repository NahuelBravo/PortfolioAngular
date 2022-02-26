import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-proyect',
  templateUrl: './info-proyect.component.html',
  styleUrls: ['./info-proyect.component.css']
})
export class InfoProyectComponent implements OnInit {


proyectTitle: string = "Banco Wakanda";
infoProyect: string = "Aplicacion Web Banco Wakanda tanto FronEnd como BackEnd";

  constructor() { }

  ngOnInit(): void {
  }

}
