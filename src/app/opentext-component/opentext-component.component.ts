import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opentext-component',
  templateUrl: './opentext-component.component.html',
  styleUrls: ['./opentext-component.component.css']
})
export class OpentextComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  goToLink(url: string){
    window.open(url, "_blank");
}
}
