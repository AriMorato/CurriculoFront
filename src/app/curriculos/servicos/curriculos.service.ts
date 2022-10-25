import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';
import { catchError, delay, first, retry } from 'rxjs/operators';

import { Curriculo } from '../model/curriculo';
import { Status } from '../model/Status';


@Injectable({
  providedIn: 'root'
})
export class CurriculosService {

  //private readonly apiURL = '/assets/arquivo.json'
  //private readonly apiStatusURL = '/assets/status.json'
  private readonly apiURL = 'http://localhost:5036/api'
  constructor(private http:HttpClient) { 
    
  }
  
  lstCurriculos(){
    //return this.http.get<Curriculo[]>(this.apiURL + '/Curriculo')
    return this.http.get<Curriculo[]>(this.apiURL + '/Curriculo')
    .pipe(
      first(),
      //delay(10000),
      tap( curriculos=>console.log(curriculos))
    )
  }

  lstStatus(){
    //return this.http.get<Curriculo[]>(this.apiURL + '/Curriculo')
    return this.http.get<any[]>(this.apiURL + "/StatusCurriculo")
    .pipe(
      first(),
      //delay(10000),
      tap( status=>console.log(status))
    )
  }

  save(data:Partial<Curriculo>){
    data.ativo = true;
    data.dataEnvio = new Date();
    return this.http.post<Curriculo>(this.apiURL + "/Curriculo", data)
    .pipe(
      first()
    )
  }

}



  /* ***************************************Tabela Currículo******************************************** */

 
