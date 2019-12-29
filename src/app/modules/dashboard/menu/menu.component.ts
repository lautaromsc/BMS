import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {



  navLinks = [
    {path: "['./ventas']", label: 'stats'},
    {path: "['./bi']", label: 'bi'}

  ]
  

  constructor() { }

  ngOnInit() {
  }

}
