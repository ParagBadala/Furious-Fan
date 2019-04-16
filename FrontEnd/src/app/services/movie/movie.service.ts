import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map} from 'rxjs/operators'
import { Movie } from 'src/assets/DataStruct/dataStruct';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _baseUrl = 'http://127.0.0.1:3001/';
  private _getUrl = 'rest/api/get-movies';
  private _postUrl = 'rest/api/post-movies';
  private _updateUrl = 'rest/api/update-movies';
  private _deleteUrl = 'rest/api/delete-movies';
  private _movieData$: Observable<Movie[]>;
  public displayPoster:boolean=true;

  constructor(private _http: HttpClient) { }

  public objString;

  public initializeMovie():Movie{
    return{
      id: 0,
      approvalRating: null,
      description: '',
      director: '',
      imageurl: '',
      mpaa: '',
      price: null,
      releaseDate: '',
      starRating: null,
      title: '',
      category: '',
      tags: []
    };
  }

  public createMovie(movie:Movie): Observable<Movie>{  
    return this._http.post<Movie>(this._baseUrl + this._postUrl, movie);
  }

  public getmovies():Observable<Movie[]>{
    this._movieData$ = this._http.get<Movie[]>(this._baseUrl + this._getUrl)
    return this._movieData$;
  }

  public getMovie(id:number): Observable<Movie>{
    if(id === 0){
      return of(this.initializeMovie());
    }
    else{
      if(!this._movieData$){
        this.getmovies();
      }
     let _localMoviedata$ = this._movieData$;
     return _localMoviedata$.pipe(map(data=>data.filter(data=>data.id === id))).pipe(map(data=>data[0])) 
    }
  }

  public updateMovie(movie:Movie): Observable<Movie>{
    if(movie.id === 0){
      return this.createMovie(movie)
    }
    else{
    return this._http.put<Movie>(this._baseUrl + this._updateUrl, movie)
    }

  }

  public deleteMovie(id:number): Observable<Movie> {
    return this._http.delete<Movie>(this._baseUrl + this._deleteUrl + '/'+id)
  }
}
