import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { StatusPipe } from './pipes/status.pipe';
import { StatusIcoPipe } from './pipes/status-ico.pipe';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    StatusPipe,
    StatusIcoPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports:[
    ErrorDialogComponent,
    StatusPipe,
    StatusIcoPipe
  ]
})
export class SharedModule { }
