import { Component, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-button-edit-experience',
  templateUrl: './button-edit-experience.component.html',
  styleUrls: ['./button-edit-experience.component.css']
})
export class ButtonEditExperienceComponent implements OnInit {

  faPen = faPen;

  constructor() { }

  ngOnInit(): void {
  }

}
