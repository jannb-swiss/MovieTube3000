import {Component, OnInit} from "@angular/core";
import {MovieResponse} from "../../models/media.model";
import {MoviesService} from "../../services/movies.service";


@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss']
})
export class TopRatedMoviesComponent implements OnInit {

    public movies: MovieResponse | null = null;

    constructor(private moviesService: MoviesService) {}

    ngOnInit(): void {
        this.reload();
    }

    public reload = (page: number = 1) => {
        this.moviesService.getBestRatedMovies("de-CH", page, "CH").subscribe((data: MovieResponse) => {
            this.movies = data;
        });
    }

}
