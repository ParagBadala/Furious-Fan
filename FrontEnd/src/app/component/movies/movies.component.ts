import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

import { Movie } from 'src/assets/DataStruct/dataStruct';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public pageTitle:string='Movie List';
  public errorMsg:string;
  public listFilter:string
  movies$:Observable<Movie[]>;
  MoviesData:Movie[];

  get showImage(){
    return this._moviesService.displayPoster;
  }

  set showImage(value:boolean){
    this._moviesService.displayPoster = value;
  }


  constructor(private _moviesService: MovieService) { }

  ngOnInit() {
    //this._moviesService.getmovies().subscribe(data=>console.log(data))
    this.getMovies();
  }

  getMovies(){
    this.movies$ = this._moviesService.getmovies()
      .pipe(
          catchError(error => {
            this.errorMsg = error
            return of([]);
            }
          ),
        );
  }

  toggleImage(){
    this.showImage = !this.showImage;
  }










}
