import {Component, OnInit} from "@angular/core";
import {MovieResponse} from "../../models/media.model";
import {MoviesService} from "../../services/movies.service";


@Component({
    selector: 'app-hottest-movies',
    templateUrl: './hottest-movies.component.html',
    styleUrls: ['./hottest-movies.component.scss']
})
export class HottestMoviesComponent implements OnInit {

    public movies: MovieResponse | null = null;

    constructor(private moviesService: MoviesService) {}

    ngOnInit(): void {
        this.reload();
    }

    public reload = (page: number = 1) => {
        this.moviesService.getPopularMovies("de-CH", page, "CH").subscribe((data: MovieResponse) => {
            this.movies = data;
        });
    }

}
