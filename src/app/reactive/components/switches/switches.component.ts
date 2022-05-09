import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  form: FormGroup = this.fb.group({
    genero: ['M', [Validators.required,]],
    notificacao: [true, [Validators.required]],
    condicao: [false, [Validators.requiredTrue]]
  });

  pessoa = {
    genero: 'F',
    notificacao: true,
    condicao: false,
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form.setValue( this.pessoa )
  }

  gravar(){}

}
