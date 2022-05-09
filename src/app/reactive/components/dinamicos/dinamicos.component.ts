import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
})
export class DinamicosComponent implements OnInit {

  form: FormGroup = this.fb.group({
    nome: ['', [Validators.required ,Validators.minLength(3)]],
    favoritos!: this.fb.array([
      ['Metal Gear'],
      ['Mortal Kombat']
    ], Validators.required  )
  });

  novoJogo: FormControl = this.fb.control('', Validators.required);

  get favoritoArr (){
    return this.form.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  campoIsValid(campo: string): boolean {
    return this.form.controls[campo].errors && this.form.controls[campo].touched
      ? true
      : false;
  }

  add(){
    if( this.novoJogo.invalid ) return;

    this.favoritoArr.push( this.fb.control( this.novoJogo.value, Validators.required ) )
    this.novoJogo.reset();
  }

  remove(index: number){
    this.favoritoArr.removeAt(index);
    this.favoritoArr.markAsDirty();
  }

  gravar() {
    console.log(this.form);

  }
}
