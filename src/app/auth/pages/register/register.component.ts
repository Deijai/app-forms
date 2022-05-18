import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ValidateService } from './../../../shared/validators/validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.fb.group({
    nome: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validateService.nomePattern),
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validateService.emailPattern),
      ],[this.authService.validate]
    ],
    username: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        this.validateService.validateFunc,
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
  }, {
    validators: [
      this.validateService.campoIsEquals('password', 'password2')
    ]
  });

  constructor(
    private fb: FormBuilder,
    private validateService: ValidateService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.form.reset({
      nome: 'Deijai Miranda',
      username: 'deijai',
      email:'djairn18@gmail.com',
      password:'123456',
      password2:'123456'
    });
  }

  campoIsValid(campo: string): boolean {
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched
      ? true
      : false;
  }

  gravar() {
    console.log(this.form);

    this.form.markAllAsTouched();
  }
}
