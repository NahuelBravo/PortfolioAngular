import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent implements OnInit {

  imgProfile: string = "assets/Img/blank-profile-picture.png";

  constructor() { }

  ngOnInit(): void {
  }

}
