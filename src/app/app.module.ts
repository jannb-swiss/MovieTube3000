import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./components/header/header.component";
import {MovieDetailComponent} from "./components/movie-detail/movie-detail.component";

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
import { HomepageComponent } from './components/homepage/homepage.component';
import {NgbModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";



const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent,
    //GenersComponent,
    MovieDetailComponent,
    SliderComponent,
    HomepageComponent,
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
