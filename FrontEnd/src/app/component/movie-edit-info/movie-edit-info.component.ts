import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/assets/DataStruct/dataStruct';
import { NgForm } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit-info.component.html',
  styleUrls: ['./movie-edit-info.component.css']
})
export class MovieEditInfoComponent implements OnInit, AfterViewInit {

  @ViewChild('movieForm') movieForm: NgForm;
   private _movie$: Observable<Movie>;

  constructor(private _route: ActivatedRoute) {  }

  public ngOnInit(): void{
    this._movie$ = this._route.parent.data.pipe(
      switchMap((data)=>of(data['movie']))
      );
  }
  public ngAfterViewInit(){ }
}
