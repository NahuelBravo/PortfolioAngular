import { Component, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-button-edit-education',
  templateUrl: './button-edit-education.component.html',
  styleUrls: ['./button-edit-education.component.css']
})
export class ButtonEditEducationComponent implements OnInit {

  faPen = faPen;
  
  constructor() { }

  ngOnInit(): void {
  }

}
