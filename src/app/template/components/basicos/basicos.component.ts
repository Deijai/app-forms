import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  initForm ={
    produto: 'Produto Inicial',
    preco: 10,
    estoque: 100
  }

  constructor() {}

  ngOnInit(): void {}

  gravar() {
    console.log( this.form );
    this.form.resetForm({
      preco: 0,
      estoque: 0
    });
  }

  productIsValid(): boolean {
    if (
      this.form?.controls.produto?.errors &&
      this.form?.controls.produto?.touched
    )
      return false;
    return true;
  }

  precoIsValid(): boolean {
    if (
      (this.form?.controls.preco?.value <= 0 ||
        this.form?.controls.preco?.value.length < 0) &&
      this.form?.controls.preco?.touched
    )
      return false;

    return true;
  }
}
