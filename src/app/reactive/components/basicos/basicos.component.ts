import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent implements OnInit {
  /* form: FormGroup = new FormGroup({
    'nome': new FormControl('TRX 4080 ti'),
    'preco': new FormControl(322),
    'estoque': new FormControl(100)
  });
 */

  form: FormGroup = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    preco: [, [Validators.required, Validators.min(0)]],
    estoque: [, [Validators.required, Validators.min(0)]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.setValue({
      nome: 'RT0111',
      preco: 2400,
      estoque: 15
    })
  }

  campoIsValid(campo: string): boolean {
    return this.form?.controls[campo].errors &&
      this.form?.controls[campo].touched
      ? true
      : false;
  }
  gravar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log(this.form);

    this.form.reset();
  }
}
