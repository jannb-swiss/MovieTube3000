import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./components/header/header.component";
import {MovieComponent} from "./components/movie/movie.component";
import {FrontPageComponent} from "./components/front-page/front-page.component";
import {HottestMoviesComponent} from "./components/hottest-movies/hottest-movies.component";
import {DiscoverComponent} from "./components/discover/discover.component";
import {GridContainerComponent} from "./components/grid-container/grid-container.component";
import {GridComponent} from "./components/grid/grid.component";
import {InTheaterMoviesComponent} from "./components/in-theater-movies/in-theater-movies.component";
import {FavoriteMoviesComponent} from "./components/favorite-movies/favorite-movies.component";
import {TopRatedMoviesComponent} from "./components/top-rated-movies/top-rated-movies.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    AppComponent,
    //SliderComponent,
    HeaderComponent,
    //GenersComponent,
    MovieComponent,
    FrontPageComponent,
    HottestMoviesComponent,
    FavoriteMoviesComponent,
    InTheaterMoviesComponent,
    GridComponent,
    GridContainerComponent,
    DiscoverComponent,
    TopRatedMoviesComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    //NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    SlickCarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
