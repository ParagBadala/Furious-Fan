import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from 'src/assets/DataStruct/dataStruct';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Movie[], args?: string): Movie[] {
    console.log()
    let filter = args ? args.toLowerCase():null;
    return filter ? value.filter(
      (movie:Movie)=>{return movie.title.toLowerCase().indexOf(filter)!=-1}
      ):value;
   }
}
