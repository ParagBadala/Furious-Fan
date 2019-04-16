import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { MenuComponent } from './component/menu/menu.component';
import { LoginService } from './services/login.service';
import { MoviesComponent } from './component/movies/movies.component';
import { MovieService } from './services/movie/movie.service';
import { HttpErrorInterceptor } from './app.interceptor';
import { FilterPipe } from './filter.pipe';
import { StarComponent } from './component/star/star.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { MovieEditComponent } from './component/movie-edit/movie-edit.component';
import { MovieResolver } from './services/movie/movie.resolver';
import { MovieEditInfoComponent } from './component/movie-edit-info/movie-edit-info.component';
import { MovieEditTagsComponent } from './component/movie-edit-tags/movie-edit-tags.component';
import { AuthGuard } from './auth.guard';
import { MovieEditGuard } from './movie-edit.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    HomeComponent,
    PageNotFoundComponent,
    MenuComponent,
    MoviesComponent,
    FilterPipe,
    StarComponent,
    MovieDetailComponent,
    MovieEditComponent,
    MovieEditInfoComponent,
    MovieEditTagsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,      
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    LoginService,
    MovieService,
    MovieResolver,
    AuthGuard,
    MovieEditGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
