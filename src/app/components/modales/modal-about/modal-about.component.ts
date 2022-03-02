import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-about',
  templateUrl: './modal-about.component.html',
  styleUrls: ['./modal-about.component.css']
})
export class ModalAboutComponent implements OnInit {

  background = "assets/Img/background-image-modal.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
