import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Curriculo } from '../model/curriculo';
import { Status } from '../model/Status';
import { CurriculosService } from '../servicos/curriculos.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';


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
    'Status',
    'actions'
  ]

  constructor(
    private restApi:CurriculosService,
    public dialog: MatDialog,
    private router:Router,
    private route:ActivatedRoute
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

  onAdd(){
    this.router.navigate(['novoCurriculo'], {relativeTo:this.route})
  }

  onError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
