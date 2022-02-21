import { Component, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button-edit-skills',
  templateUrl: './button-edit-skills.component.html',
  styleUrls: ['./button-edit-skills.component.css']
})
export class ButtonEditSkillsComponent implements OnInit {

  faPen = faPen;

  constructor() { }

  ngOnInit(): void {
  }

}
