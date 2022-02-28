import { Component, OnInit } from '@angular/core';
import { faHtml5, faCss3,faAngular ,faJsSquare, } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-card-hard-skill',
  templateUrl: './card-hard-skill.component.html',
  styleUrls: ['./card-hard-skill.component.css']
})
export class CardHardSkillComponent implements OnInit {

  icons = [{
    icon: faHtml5, text:"HTML5"},{icon: faCss3, text:"CSS3"},{icon: faAngular, text:"Angular"},{icon: faJsSquare, text:"Javascript"}
]
  

  text: string = "HTML5";

  constructor() { }

  ngOnInit(): void {
  }

}
