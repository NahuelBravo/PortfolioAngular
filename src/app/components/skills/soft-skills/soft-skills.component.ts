import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent implements OnInit {

  title: string = "SOFT SKILLS";

  constructor() { }

  ngOnInit(): void {
  }

}
