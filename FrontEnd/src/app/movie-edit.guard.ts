import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MovieEditComponent } from './component/movie-edit/movie-edit.component';


@Injectable({
  providedIn: 'root'
})
export class MovieEditGuard implements CanDeactivate<MovieEditComponent> {

    canDeactivate(component: MovieEditComponent): boolean {
        if (component.isDirty) {
            const title = component.movie.title || 'New Movie';
            return confirm(`Navigate away and lose all changes to ${title}?`);
        }
        return true;
    }
}
