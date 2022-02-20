import { Component, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-button-edit-about',
  templateUrl: './button-edit-about.component.html',
  styleUrls: ['./button-edit-about.component.css']
})
export class ButtonEditAboutComponent implements OnInit {

  faPen = faPen;

  constructor() { }

  ngOnInit(): void {
  }

}
