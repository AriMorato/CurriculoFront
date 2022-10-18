import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusIco'
})
export class StatusIcoPipe implements PipeTransform {

  transform(value: number): string {
    switch (value){
      case 0 : return "file_open";
      case 1 : return "description";
      case 2 : return "front_hand";
      case 3 : return "cancel";
      case 4 : return "check_small";
      case 5 : return "psychology";
      case 6 : return "aproval_delegation";
      case 7 : return "free_cancellation";
    }
  
    return 'file_open'; 
}
 

}
