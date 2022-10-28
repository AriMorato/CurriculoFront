import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CurriculosService } from '../servicos/curriculos.service';
import { Curriculo } from '../model/curriculo';

@Injectable({
  providedIn: 'root'
})
export class CurriculoResolver implements Resolve<Curriculo> {

constructor(private restApi:CurriculosService){}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curriculo> {
    if(route.params && route.params['id']){
      return this.restApi.loadByEdit(route.params['id'])
    }
    return of(...arguments,{ id :'', nome:'', sobreNome:'', cpf:'',cargo:'', remuneracao:null, status:null, dataEnvio:null, ativo:null});
  }
}
