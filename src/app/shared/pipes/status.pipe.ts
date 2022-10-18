import { Pipe, PipeTransform } from '@angular/core';
import { Curriculo } from 'src/app/curriculos/model/curriculo';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {
  
  transform(value: number): string {
      switch (value){
        case 0 : return "Envie seu Curriculo";
        case 1 : return "Recebido";
        case 2 : return "Em Analise";
        case 3 : return "Recusado";
        case 4 : return "Aceito";
        case 5 : return "Em Avaliação";
        case 6 : return "Aprovado";
        case 7 : return "Reprovado";
      }
    
      return 'Envie seu Curriculo'; 
  }


}
