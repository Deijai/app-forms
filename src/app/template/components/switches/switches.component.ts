import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  pessoa = {
    genero: 'M',
    notificacao: false,
    condicao: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
