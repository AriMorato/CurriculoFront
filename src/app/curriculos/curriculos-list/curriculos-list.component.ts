import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Event, Router } from '@angular/router';
import { Curriculo } from '../model/curriculo';

@Component({
  selector: 'app-curriculos-list',
  templateUrl: './curriculos-list.component.html',
  styleUrls: ['./curriculos-list.component.scss']
})
export class CurriculosListComponent implements OnInit {

  @Input()lstCurriculos:Curriculo[] = [];
  @Output() add = new EventEmitter(false)

  readonly displayedColumns = [
    'Id',
    'Nome',
    'Cpf',
    'DataEnvio',
    'Status',
    'actions'
  ]

  constructor( ) { }

  ngOnInit(): void {
  }

  onAdd(){
    this.add.emit(true);
  }

}
