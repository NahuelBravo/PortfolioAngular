import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  background = "assets/Img/background-image-modal.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
