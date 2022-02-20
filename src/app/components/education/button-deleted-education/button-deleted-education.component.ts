import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button-deleted-education',
  templateUrl: './button-deleted-education.component.html',
  styleUrls: ['./button-deleted-education.component.css']
})
export class ButtonDeletedEducationComponent implements OnInit {

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
