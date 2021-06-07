import {Component} from "@angular/core";
import {Configuration, ConfigurationResponse, Media} from "./models/media.model";
import {TMDBService} from "./services/tmdb.service";
import {MovieModalService} from "./services/movie-modal.service";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  public TMDBConfiguration: Configuration;

  public activeMovie: Media|null = null;

  constructor(private tmdbService: TMDBService, private movieModalService: MovieModalService) {
    this.movieModalService.movie.subscribe((movie: Media) => {
      this.activeMovie = movie;
    });
    this.tmdbService.getConfiguration().subscribe((data: ConfigurationResponse) => {
      this.TMDBConfiguration = data.images;
    });
  }

}

