import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetectorPlataformaService {

constructor(@Inject(PLATFORM_ID) private platformId: string) { }

ehNavegador(){ //Esse método verifica se o usuário está acessando em um browser
  return isPlatformBrowser(this.platformId);
}

}


//Isso é útil quando é necessário manipular o DOM diretamente, pois só funciona no browser.
