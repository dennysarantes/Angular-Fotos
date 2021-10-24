import { FormGroup, ValidatorFn } from "@angular/forms";

export const userNamePasswordValidator : ValidatorFn | any = (formGroup : FormGroup) => {
  const userName = formGroup.get('userName')?.value;
  const password = formGroup.get('password')?.value;

  if((userName + password)){
    return null;
  }

  if (userName.trim() + password.trim()){
   return userName != password
    ? null
    : {userNamePasswordValidator : true};
  }else {
      return null;
  }
}
