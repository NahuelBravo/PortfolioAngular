import { Component, OnInit } from '@angular/core';
import { faSignInAlt} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-boton-login-logout',
  templateUrl: './boton-login-logout.component.html',
  styleUrls: ['./boton-login-logout.component.css']
})
export class BotonLoginLogoutComponent implements OnInit {

  
  signIn = faSignInAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
