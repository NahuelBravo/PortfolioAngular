import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/service/general-service.service';


@Component({
  selector: 'app-card-exp',
  templateUrl: './card-exp.component.html',
  styleUrls: ['./card-exp.component.css']
})
export class CardExpComponent implements OnInit {

  experiences: any;

  constructor(private generalService: GeneralServiceService) { }

  ngOnInit(): void {
    this.generalService.obtenerDatos().subscribe(data =>{
      this.experiences= data.experience;
    })
  }

}
