import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from 'src/assets/DataStruct/dataStruct';

@Component({
  selector: 'app-movie-edit-tags',
  templateUrl: './movie-edit-tags.component.html',
  styleUrls: ['./movie-edit-tags.component.css']
})
export class MovieEditTagsComponent implements OnInit, OnDestroy {

  private movie: Movie;
  private _data;
  public newTags = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._data = this.route.parent.data.subscribe(data => {
      this.movie = data['movie'];
    });
  }

  private addTags(): void{
    const tagArray = this.newTags.split(',');
    this.movie.tags = this.movie.tags ? this.movie.tags.concat(tagArray) : tagArray;
    this.newTags = '';
  }

  private removeTag(idx: number): void{
    this.movie.tags.splice(idx,1);
  }

  ngOnDestroy(): void {
    this._data.unsubscribe();
  }

}
