import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './component/login/login.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { HomeComponent } from './component/home/home.component';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { MoviesComponent } from './component/movies/movies.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { MovieEditComponent } from './component/movie-edit/movie-edit.component';
import { MovieResolver } from './services/movie/movie.resolver';
import { MovieEditInfoComponent } from './component/movie-edit-info/movie-edit-info.component';
import { MovieEditTagsComponent } from './component/movie-edit-tags/movie-edit-tags.component';

import { MovieEditGuard } from './movie-edit.guard';

const appRoutes:Routes = [
  {path:'login', component:LoginComponent},
  {path:'welcome', component:WelcomeComponent},
  {path:'home', component:HomeComponent, canActivate: [AuthGuard], children:[
    {path:'movies', component:MoviesComponent},
    {path:'movies/:id/edit', resolve:{movie: MovieResolver}, canDeactivate: [MovieEditGuard], component:MovieEditComponent, children:[
        { path: '', redirectTo: 'info', pathMatch: 'full' },
        { path: 'info', component: MovieEditInfoComponent },
        { path: 'tags', component: MovieEditTagsComponent }
     ]},
     {path:'movies/:id', resolve:{movie: MovieResolver}, component:MovieDetailComponent},
     {path:'', redirectTo:'/welcome',pathMatch:'full'}
  ]},
  {path:'', redirectTo: '/login', pathMatch: 'full' },
  {path:'**', component:PageNotFoundComponent}
 ]

@NgModule({
   exports: [ RouterModule ],
  imports: [
   RouterModule.forRoot( appRoutes,{useHash:true})
  ],
  declarations: []
})
export class AppRoutingModule { }
