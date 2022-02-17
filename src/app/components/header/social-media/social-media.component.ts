import { Component, OnInit } from '@angular/core';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  instagram = faInstagramSquare;
  twitter = faTwitterSquare;
  gitHub = faGithubSquare;

instagramLink: string = "https://www.instagram.com/nxxhu__/";
twitterLink: string = "https://twitter.com/Nxxhu_";
gitHubLink: string = "https://github.com/NahuelBravo"
  constructor() { }

  ngOnInit(): void {
  }

}
