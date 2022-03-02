import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/service/general-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  educations: any;

  constructor(private generalService: GeneralServiceService) { }

  ngOnInit(): void {
    this.generalService.obtenerDatos().subscribe(data =>{
      this.educations = data.education;
    })
  }

}
