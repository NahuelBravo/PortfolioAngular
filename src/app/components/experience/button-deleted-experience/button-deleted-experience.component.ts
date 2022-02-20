import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button-deleted-experience',
  templateUrl: './button-deleted-experience.component.html',
  styleUrls: ['./button-deleted-experience.component.css']
})
export class ButtonDeletedExperienceComponent implements OnInit {

faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
