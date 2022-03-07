import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/service/general-service.service';

import { About } from '../../service/about/interfaceAbout';
import { ABOUT } from '../../service/about/mock-about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: About[] = [];

  aboutA: About = ABOUT [0];
 
  constructor(private generalService: GeneralServiceService) { }

  ngOnInit(): void {

    this.generalService.getAbout().subscribe((about) =>
    this.about = about
    )
  }

  editAbout(about: About){
    console.log("hola soy el aboutcomponent")
    this.generalService.editAbout(about).subscribe()
  }

}
