import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CurriculosService } from '../curriculos/servicos/curriculos.service';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CurriculosRoutingModule } from './curriculos-routing.module';
import { CurriculosComponent } from './curriculos/curriculos.component';



@NgModule({
  declarations: [
    CurriculosComponent
  ],
  imports: [
    CommonModule,
    CurriculosRoutingModule,
    AppMaterialModule,
    SharedModule
    

   
  ],
  providers:[CurriculosService]

})
export class CurriculosModule { }
