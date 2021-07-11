import { DetectorPlataformaService } from './../../shared/plataforma/detector-plataforma.service';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss']
})
export class SiginComponent implements OnInit {

  loginForm!: FormGroup | any;
  @ViewChild('userNameInput') userNameInput!: ElementRef<HTMLInputElement>; //Procura o elemento #userName do DOM


  constructor(private formBuilder : FormBuilder,
              private authService: AuthService,
              private router : Router,
              private detectorPlataformaService : DetectorPlataformaService) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      userName: [''],
      password: ['']
    })
  }

  ngAfterViewInit(){ //Esse método foi usado para dar foco ao usernameInput ao carregar a página
    if (this.detectorPlataformaService.ehNavegador()){
      this.userNameInput.nativeElement.focus();
    }
  }

  OnChanges(){
  }

  ehValido(u: string, p: string) : Boolean{

    if(!u && !p){ //Verifica se o username e senha estão em branco
      console.log('UserName e senha estão em branco')

      this.loginForm.setErrors({
        userName: true,
        password: true
      });
      return false;
    }

    if(!u){ //verifica se apenas o usuário está em branco
      console.log('username está em branco')
      this.loginForm.setErrors({
        userName: true,
      });
      return false;
    }
    if(!p){ //verifica se apenas a senha está em branco
      console.log('senha está em branco')
      this.loginForm.setErrors({
        password: true
      });
      return false;
    }

    return true;
  }

  login(){

    const userName = this.loginForm.get('userName');
    const password = this.loginForm.get('password');

    if(!this.ehValido(userName.value, password.value)){
      return
    }

    this.authService
        .authenticate(userName.value , password.value)
        .subscribe(
          (resp) => {
            console.log('Autenticado com sucesso!')
            this.router.navigate(['user',  userName.value])  //localhost:4200/user/flavio
          },
          err => {
            console.log('Usuário ou senha inválido!', err)
            alert('Usuário ou senha inválido')
            this.loginForm.reset();

            if (this.detectorPlataformaService.ehNavegador()){
              this.userNameInput.nativeElement.focus();
            }

          });
  }


}
