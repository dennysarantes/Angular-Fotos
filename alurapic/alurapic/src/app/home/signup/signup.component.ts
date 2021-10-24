import { userNamePasswordValidator } from './username-password-validator/userNamePasswordValidator';
import { DetectorPlataformaService } from 'src/app/shared/plataforma/detector-plataforma.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService } from './../../services/signup/signup.service';
import { NewUser } from './model/newUserForm';
import { UserNameJaExisteValidator } from './../../shared/validators/userNameJaExiste.validator.service';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { nomeUsuarioValidator } from 'src/app/shared/validators/nome-usuario.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>; //Procura o elemento #userName do DOM

  signupForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder,
              private userNameJaExisteValidator: UserNameJaExisteValidator,
              private signupService: SignupService,
              private router : Router,
              private detectorPlataformaService : DetectorPlataformaService) { }

  ngOnInit() {



    this.signupForm = this.formBuilder.group({
      userName: [null,
          [
              Validators.required,
              nomeUsuarioValidator //Validador próprio!
          ],
              this.userNameJaExisteValidator.checkUserName() //Validador assíncrono
      ],
      fullName: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
      email: ['', [Validators.required, Validators.email]]
    }, {
      validator : userNamePasswordValidator //Validador crossfield, verifica se senha é igual ao username
    })

  }

  ngAfterViewInit(){ //Esse método foi usado para dar foco ao emailInput ao carregar a página
    if (this.detectorPlataformaService.ehNavegador()){
      this.emailInput.nativeElement.focus();
    }
  }

  registrarUsuario(){
    const newUser = this.signupForm.getRawValue() as NewUser; //getRawValue devolve o objeto com todos os campos do form

    if (this.signupForm.valid && !this.signupForm.pending) {
      this.signupService.registraUsuario(newUser)
      .subscribe(
        () =>{
          this.router.navigate(['']);
        },
        (err) => {
            console.log('Não foi possível registrar o usuário')
            console.log(err);
        }
      );
    }
  }

}
