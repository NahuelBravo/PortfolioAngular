import { Component, OnInit } from '@angular/core';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-card-hard-skill',
  templateUrl: './card-hard-skill.component.html',
  styleUrls: ['./card-hard-skill.component.css']
})
export class CardHardSkillComponent implements OnInit {

  faHtml5 = faHtml5 ;

  text: string = "HTML5";

  constructor() { }

  ngOnInit(): void {
  }

}
