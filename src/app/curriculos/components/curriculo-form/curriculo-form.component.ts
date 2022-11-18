import { BlockScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { CurriculosService } from '../../servicos/curriculos.service';
import { catchError, Observable, of } from 'rxjs';
import { Status } from '../../model/Status';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { isEmpty } from 'rxjs';
import { Curriculo } from '../../model/curriculo';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Router, RouterEvent, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.scss']
})
export class CurriculoFormComponent implements OnInit {

  lstStatus$:Observable<any[]>;

  form = this.frmBuilder.group({
    nome:[''],
    sobreNome:[''],
    cpf:[''],
    cargo:[''],
    remuneracao:[0.0],
    status:[0]
  })


  constructor(
    private frmBuilder:NonNullableFormBuilder,
    private restApi:CurriculosService,
    public dialog: MatDialog,
    private snack:MatSnackBar,
    private location:Location,
    private route:ActivatedRoute) {

    this.lstStatus$= this.restApi.lstStatus()
    .pipe(
        catchError(error=>{
          this.onError('Erro ao carregar Lista de Status')
          return of([])
        })
      )
  }

  ngOnInit(): void {
    const curriculo:Curriculo = this.route.snapshot.data['curriculo']
    console.log(curriculo)
    this.form.patchValue({
      nome:curriculo.nome,
      sobreNome: curriculo.sobreNome,
      cpf:curriculo.cpf,
      cargo:curriculo.cargo,
      remuneracao:curriculo.remuneracao,
      status:curriculo.status
    })
    this.form.controls.status


  }
  onSubmit(){
     this.restApi.save(this.form.value).subscribe(data=>this.onSuccess()
   ,error=>this.onError("Erro ao salvar curriculo."))
   //console.log(this.form.value)
  }

  onSuccess(){
    this.snack.open("Currículo Salvo com sucesso.",'',{duration:5000})
    this.onCancel();
  }


  onCancel(){
    this.location.back();
  }

  onError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}
