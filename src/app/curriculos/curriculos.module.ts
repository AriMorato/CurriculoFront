import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CurriculosService } from '../curriculos/servicos/curriculos.service';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CurriculoFormComponent } from './components/curriculo-form/curriculo-form.component';
import { CurriculosRoutingModule } from './curriculos-routing.module';
import { CurriculosComponent } from './containers/curriculos/curriculos.component';
import { CurriculosListComponent } from './components/curriculos-list/curriculos-list.component';


@NgModule({
  declarations: [
    CurriculosComponent,
    CurriculoFormComponent,
    CurriculosListComponent
  ],
  imports: [
    CommonModule,
    CurriculosRoutingModule,
    SharedModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[CurriculosService]

})
export class CurriculosModule { }
