import { Component, OnInit } from '@angular/core';
import { faUserClock, faSearch, faUsers, faExclamationCircle, faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-soft-skill',
  templateUrl: './card-soft-skill.component.html',
  styleUrls: ['./card-soft-skill.component.css']
})
export class CardSoftSkillComponent implements OnInit {

  icons = [
    {icon: faUserClock, text:"Gestion del Tiempo"},{icon: faSearch , text:"Atencion al Detalle"},{icon: faUsers , text:"Trabajo en Equipo"},
    {icon: faExclamationCircle , text:"Resolucion de Problemas"},{icon: faComments , text:"Comunicacion"}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
