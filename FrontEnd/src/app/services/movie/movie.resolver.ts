import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { MovieService } from './movie.service';
import { Movie } from 'src/assets/DataStruct/dataStruct';

@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<Movie> {

  constructor(private movieService: MovieService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Movie> {
    const id = route.paramMap.get('id');
    return this.movieService.getMovie(+id);
  }
}
