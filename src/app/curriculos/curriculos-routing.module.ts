import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculoFormComponent } from './components/curriculo-form/curriculo-form.component';
import { CurriculosComponent } from './containers/curriculos/curriculos.component';
import { CurriculoResolver } from './guards/curriculo.resolver';

const routes: Routes = [
  {path:'', component:CurriculosComponent},
  {path:'novoCurriculo', component:CurriculoFormComponent , resolve:{curriculo:CurriculoResolver}},
  {path:'editCurriculo/:id', component:CurriculoFormComponent, resolve:{curriculo:CurriculoResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculosRoutingModule { }
