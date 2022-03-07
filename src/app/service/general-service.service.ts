import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { About } from './about/interfaceAbout';

const httpOptions = {
  
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {


  private apiUrlAbout = "http://localhost:5000/about";

  constructor(private http:HttpClient) { 
  }

  getAbout(): Observable<About[]>{
    return this.http.get<About[]>(this.apiUrlAbout);
  }

  obtenerDatos(): Observable<any>{
    return this.http.get("assets/data/data.json");
  }

  editAbout(about: About): Observable<About[]>{
    console.log("hola soy el servicio")
    const url =`${this.apiUrlAbout}/${about.id}`
    return this.http.put<About[]>(url, about, httpOptions)
  }
}
