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
    return this.http.get<Status[]>(this.apiURL + "/StatusCurriculo")
    .pipe(
      first(),
      //delay(10000),
      tap( status=>console.log(status))
    )
  }

  save(data:Partial<Curriculo>){

    console.log(data)
    data.ativo = true;
    data.dataEnvio = new Date(); //new Date('dd/MM/yyyy');

   if(data.id){
    return this.update(data)
   }
   return this.create(data)
  }


  private create(data:Partial<Curriculo>){
    return this.http.post<Curriculo>(this.apiURL + "/Curriculo", data).pipe(first());
  }

  private update(data:Partial<Curriculo>){
    return this.http.put<Curriculo>(this.apiURL + '/Curriculo'+ data.id, data).pipe(first());
  }

  loadByEdit(id:Number){
    return this.http.get<Curriculo>(this.apiURL + '/Curriculo/'+id)
  }

}



  /* ***************************************Tabela Currículo******************************************** */


