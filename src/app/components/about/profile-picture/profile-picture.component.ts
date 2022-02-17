import { Component, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent implements OnInit {

  faPen = faPen;

  profileAlt: string ="Profile picture "
  imgProfile: string = "assets/Img/blank-profile-picture.png";

  constructor() { }

  ngOnInit(): void {
  }

}
