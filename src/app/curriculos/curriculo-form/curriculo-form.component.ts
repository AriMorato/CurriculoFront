import { BlockScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CurriculosService } from '../servicos/curriculos.service';
import { catchError, Observable, of } from 'rxjs';
import { Status } from '../model/Status';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { isEmpty } from 'rxjs';
import { Curriculo } from '../model/curriculo';



@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.scss']
})
export class CurriculoFormComponent implements OnInit {
  lstStatus$:Observable<any[]>;
  form: FormGroup;
  

  constructor(
      private frmBuilder:FormBuilder,  
      private restApi:CurriculosService,
      public dialog: MatDialog) {
      
    

    this.form = this.frmBuilder.group({
      nome:[null],
      sobreNome:[null],
      cpf:[null],
      cargo:[null],
      remuneracao:[null],
      status:[null]
    })

    this.lstStatus$= this.restApi.lstStatus()
    .pipe(
      catchError(error=>{
        this.onError('Erro ao carregar Lista de Status')
        return of([])
      })
    )
  }

  ngOnInit(): void {
  }
  onSubmit(){
   this.restApi.save(this.form.value)
   .subscribe(data=> console.log(data)
   ,error=>this.onError("Erro ao salvar curriculo."))
  }
  
  onCancel(){

  }

  onError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}
