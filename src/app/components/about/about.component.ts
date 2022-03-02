import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/service/general-service.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: any;

  constructor(private generalService: GeneralServiceService) { }

  ngOnInit(): void {
    this.generalService.obtenerDatos().subscribe(data =>{
      this.about = data.about;
  })
  }

}
