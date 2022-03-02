import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {


  /* About 
  nameAbout: string = "Eric Nahuel Bravo";
  jobAbout: string = "Full Stack Developer Jr.";
  textAbout: string = "Lorem ipsum dolor sit amet, his cibo clita no, nec aliquam patrioque mediocritatem ne. Perfecto repudiare pertinacia sea ut, ei liber consequat vis. Ex dicam molestie scripserit his, probo soluta reprimique vel ut, sit latine laboramus constituam ea. Quaeque percipitur an quo, ea qui option liberavisse. Ius ne putant consetetur. Nostrud adipisci te nec. Vis ullum dictas mediocritatem et.";
  */ 


  constructor(private http:HttpClient) { 
  }

  obtenerDatos(): Observable<any>{
    return this.http.get("assets/data/data.json");
  }
}
