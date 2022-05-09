import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Pessoa {
  nome: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
})
export class DinamicosComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  novoJogo: string = '';
  pessoa: Pessoa = {
    nome: 'Deijaí Miranda',
    favoritos: [
      { id: 1, nome: 'Metal Gear'},
      { id: 2, nome: 'Mortal Kombat'},
    ]

  }


  constructor() {}

  ngOnInit(): void {}

  validateNome(): boolean {
    return this.form?.controls.nome?.touched
    && this.form?.controls.nome?.value.length < 3
      ? true
      : false;
  }

  gravar() {
    console.log('ok');
  }

  validateInput() {
    this.form?.controls?.novoJogo.value.length < 0 ? false : true
  }

  addJogo(){
    const favorito: Favorito = {
      id: this.pessoa.favoritos.length + 1,
      nome: this.novoJogo
    }
    this.pessoa.favoritos.push(favorito);
    this.form?.controls?.novoJogo.reset();
  }

  deleteInput(index: number){
    this.pessoa.favoritos.splice(index, 1);
  }
}
