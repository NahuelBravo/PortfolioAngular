import { Component, OnInit } from '@angular/core';
import { LogoArgProgComponent } from './logo-arg-prog/logo-arg-prog.component';
import { SocialMediaComponent } from './social-media/social-media.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
