import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Movie } from 'src/assets/DataStruct/dataStruct';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit, OnDestroy {

  private _movie:Movie;
  private _data;
  public originalMovie:Movie;
  public currentMovie:Movie;
  public pageTitle: string;
  public buttonName:string;
  public isDeleteButton:boolean;

  get isDirty(): boolean {
    return JSON.stringify(this.originalMovie) !== JSON.stringify(this.currentMovie);
  }

  get movie(): Movie {
    return this.currentMovie;
  }
  set movie(value: Movie) {
    this.currentMovie = value;
    this._movie = value;
    // Clone the object to retain a copy
    this.originalMovie = Object.assign({}, value);
  }

  constructor(private _route: ActivatedRoute, private _router: Router, private _movieService: MovieService) { }
  
  ngOnInit(): void{
    this._route.data.subscribe(data =>{
      this.onMovieRetrieved(data['movie']);
    })
  }

  private onMovieRetrieved(movie: Movie): void {
    this.movie = movie;
    if(movie.id === 0){
      this.pageTitle = 'Add Movie';
      this.buttonName = 'Add Movie';
      this.isDeleteButton = false;
    }
    else {
      this.pageTitle = `Edit Movie: ${movie.title}`;
      this.buttonName = 'Save';
      this.isDeleteButton = true;
    }
  }

  private saveMovie(): void {
    if(!this._movie.id){
      this._movieService.updateMovie(this._movie).subscribe(
        ()=>this.onSaveComplete(`${this._movie.title} Movie Added Successfully !!`)
      );
    }
    else{
    this.originalMovie = this.currentMovie;
    this._movieService.updateMovie(this._movie).subscribe(
      ()=>this.onSaveComplete(`${this._movie.title} Updated Successfully !!`)
      );
    }
  }

  private deleteMovie(): void {
      if(confirm(`Really delete the movie ${this._movie.title}`)){
      this._movieService.deleteMovie(this._movie.id).subscribe(
        ()=>this.onSaveComplete(`${this._movie.title} was deleted !!`)
      );  
    }
  }

  private isValid(){ }

  private onSaveComplete(message?: string): void {
    alert(message);
    this._router.navigate(['home/movies']);
    
  }

  ngOnDestroy(): void {
    this.currentMovie = null;
    this.originalMovie = null;
    this._movie=null
  }

}
