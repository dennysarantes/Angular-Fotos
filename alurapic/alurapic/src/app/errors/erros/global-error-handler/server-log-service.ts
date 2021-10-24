import { environment } from './../../../../environments/environment.prod';
import { ServerLog } from './server-log';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

const urlLogApi = environment.serverLog

@Injectable({providedIn : 'root'})
export class ServerLogService {

  constructor(private http : HttpClient) {}


  log(log : ServerLog){

     return this.http.post(urlLogApi + 'infra/log', log);

  }
}
