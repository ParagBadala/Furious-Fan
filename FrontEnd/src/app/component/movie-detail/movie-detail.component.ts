import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/assets/DataStruct/dataStruct';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  public pageTitle = 'Movie Detail';
  public id:number;
  public movie:Movie;
  public errorMsg:string;
  private _movie$: Observable<Movie>
  constructor(private _route: ActivatedRoute, private _router:Router, private _movieService: MovieService ) { }

  ngOnInit() {
    // this._route.paramMap.subscribe((params)=>{
    //   this.id = parseInt(params.get('id'))
    // });
    // this._movie$ = this._movieService.getMovie(this.id)
    this.movie = this._route.snapshot.data['movie'];
  }

  onBack(){
    this._router.navigate(['/home/movies'])
  }
  
}
