import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  menuTemplate: MenuItem[] = [
    {
      text: 'Básicos',
      route: './template/basicos'
    },
    {
      text: 'Dinamicos',
      route: './template/dinamicos'
    },
    {
      text: 'Switches',
      route: './template/switches'
    },
  ]

  menuReactive: MenuItem[] = [
    {
      text: 'Básicos',
      route: './reactive/basicos'
    },
    {
      text: 'Dinamicos',
      route: './reactive/dinamicos'
    },
    {
      text: 'Switches',
      route: './reactive/switches'
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
