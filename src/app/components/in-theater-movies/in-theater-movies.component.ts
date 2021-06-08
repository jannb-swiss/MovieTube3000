import {Component, OnInit} from "@angular/core";
import {MovieResponse} from "../../models/media.model";
import {MoviesService} from "../../services/movies.service";


@Component({
    selector: 'app-in-theater-movies',
    templateUrl: './in-theater-movies.component.html',
    styleUrls: ['./in-theater-movies.component.scss']
})
export class InTheaterMoviesComponent implements OnInit {

    public movies: MovieResponse | null = null;

    constructor(private moviesService: MoviesService) {}

    ngOnInit(): void {
        this.moviesService.getMoviesCurrentlyInTheater("de-CH", 1, "CH").subscribe((data: MovieResponse) => {
            this.movies = data;
        });
    }

}
