import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Curriculo } from '../model/curriculo';
import { Status } from '../model/Status';
import { CurriculosService } from '../servicos/curriculos.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';


@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.scss']
})
export class CurriculosComponent implements OnInit {


  //public lstCurriculos$!:Observable<Curriculo[]>;
  
  curriculos$:Observable<Curriculo[]>;
  status$:Observable<Status[]>
  displayedColumns = [
    'Id',
    'Nome',
    'Cpf',
    'DataEnvio',
    'Status'
  ]

  constructor(
    private restApi:CurriculosService,
    public dialog: MatDialog
    ){

    this.curriculos$ = restApi.lstCurriculos()
    .pipe(
      catchError(error=>{
        this.onError('Erro ao carregar Lista de Currículos')
        return of([])
      })
    )

    this.status$= restApi.lstStatus()
    .pipe(
      catchError(error=>{
        this.onError('Erro ao carregar Lista de Status')
        return of([])
      })
    )
  }

  ngOnInit() {
  //this.exibeCurriculos; 
  }

  onError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}