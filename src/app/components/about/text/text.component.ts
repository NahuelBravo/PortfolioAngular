import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  about: string = "Lorem ipsum dolor sit amet, his cibo clita no, nec aliquam patrioque mediocritatem ne. Perfecto repudiare pertinacia sea ut, ei liber consequat vis. Ex dicam molestie scripserit his, probo soluta reprimique vel ut, sit latine laboramus constituam ea. Quaeque percipitur an quo, ea qui option liberavisse. Ius ne putant consetetur. Nostrud adipisci te nec. Vis ullum dictas mediocritatem et.";


  constructor() { }

  ngOnInit(): void {
  }

}
