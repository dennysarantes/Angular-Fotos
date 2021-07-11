import { AbstractControl } from "@angular/forms";

export function nomeUsuarioValidator(control: AbstractControl){

  if(!control.value){ //no início o campo é null, por isso precisa desse passo
    return false
  }

  if(control.value.substring(0, 1).toLowerCase() == 'a'){ //Nome do usuário não pode começar com A
    return {userNameVal:true} //Verifica se o nome do usuário começa com "A"
  }

  return null //sem erros

}
