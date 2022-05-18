import { FormControl } from "@angular/forms";

  //pattern
  export const nomePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  export const emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  export const validateFunc = (control: FormControl) => {
    const valor: string = control.value?.trim().toLowerCase();

    if( valor === 'admin' ){
      return {username: 'invalid'}
    }
    return null;
  }
