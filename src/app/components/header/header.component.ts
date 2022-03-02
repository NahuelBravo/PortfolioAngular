import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/service/general-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header: any;
  constructor(private generalService: GeneralServiceService) { }

  ngOnInit(): void {
    this.generalService.obtenerDatos().subscribe(data =>{
      this.header= data.header;
    })
  }

}
