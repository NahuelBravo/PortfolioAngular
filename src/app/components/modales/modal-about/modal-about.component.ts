import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { About } from '../../../service/about/interfaceAbout';


@Component({
  selector: 'app-modal-about',
  templateUrl: './modal-about.component.html',
  styleUrls: ['./modal-about.component.css']
})
export class ModalAboutComponent implements OnInit {

  @Output() editAbout: EventEmitter<About> = new EventEmitter;
  id:number = 1 ;
  profileImg: string = "";
  name: string = "";
  position: string = "";
  text: string = "";

  background = "assets/Img/background-image-modal.jpg";

  constructor() { }

  ngOnInit(): void {
  }

  submitAbout(){
    console.log("hola soy el modal")
    if(this.profileImg.length === 0){
      return alert("Agregar Imagen")
    }
    if(this.name.length === 0){
      return alert("Agregar Nombre")
    }
    if(this.position.length === 0){
      return alert("Agregar Posicion")
    }
    if(this.text.length === 0){
      return alert("Agregar Texto 'Acerca de'")
    }

    const {id,profileImg, name, position, text} = this;
    const updateAbout = {id,profileImg, name, position, text};
    console.log(updateAbout)
    this.editAbout.emit(updateAbout);
  }
}
