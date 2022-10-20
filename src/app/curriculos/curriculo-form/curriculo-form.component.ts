import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.scss']
})
export class CurriculoFormComponent implements OnInit {
  form: FormGroup;

  constructor(private frmBuilder:FormBuilder) { 
    this.form = this.frmBuilder.group({
      nome:[null],
      sobrenome:[null],
      cpf:[null],
      cargo:[null],
      remuneracao:[null]
    })
  }

  ngOnInit(): void {
  }

}
