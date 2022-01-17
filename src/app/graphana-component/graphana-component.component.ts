import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphana-component',
  templateUrl: './graphana-component.component.html',
  styleUrls: ['./graphana-component.component.scss']
})
export class GraphanaComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string){
    window.open(url, "_blank");
}
}
