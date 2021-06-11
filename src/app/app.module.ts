import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./components/header/header.component";
import {MovieComponent} from "./components/movie/movie.component";

import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import { SliderComponent } from './components/slider/slider.component';
import { AllComponent } from './components/all/all.component';
import {NgbModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import { MovieGenereComponent } from './movie-genere/movie-genere.component';


const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent,
    //GenersComponent,
    MovieComponent,
    SliderComponent,
    AllComponent,
    MovieGenereComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
