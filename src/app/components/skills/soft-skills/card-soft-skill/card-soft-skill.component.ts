import { Component, OnInit } from '@angular/core';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-card-soft-skill',
  templateUrl: './card-soft-skill.component.html',
  styleUrls: ['./card-soft-skill.component.css']
})
export class CardSoftSkillComponent implements OnInit {

  faHtml5 = faHtml5 ;

  text: string = "HTML5";

  constructor() { }

  ngOnInit(): void {
  }

}
