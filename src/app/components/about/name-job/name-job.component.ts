import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-name-job',
  templateUrl: './name-job.component.html',
  styleUrls: ['./name-job.component.css']
})
export class NameJobComponent implements OnInit {

  name: string = "Eric Nahuel Bravo";
  job: string = "Full Stack Developer Jr."
  constructor() { }

  ngOnInit(): void {
  }

}
