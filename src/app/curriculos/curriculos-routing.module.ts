import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculoFormComponent } from './curriculo-form/curriculo-form.component';
import { CurriculosComponent } from './curriculos/curriculos.component';

const routes: Routes = [
  {path:'', component:CurriculosComponent},
  {path:'novoCurriculo', component:CurriculoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculosRoutingModule { }
