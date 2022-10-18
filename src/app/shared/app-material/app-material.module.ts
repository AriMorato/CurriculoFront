import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
 exports: [
  MatTableModule,
  MatFormFieldModule,
  MatCardModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatButtonModule,
  MatIconModule
 ]
 
})
export class AppMaterialModule { }