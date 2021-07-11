import { Injectable } from '@angular/core';

const KEY = 'authToken'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

constructor() { }

hasToken(){
  return !!this.getToken();
}

setToken(token : any){
  window.localStorage.setItem(KEY, token)
}

getToken() : any{
 return window.localStorage.getItem(KEY);
}

removeToken(){
  window.localStorage.removeItem(KEY);
}

}
