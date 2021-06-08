import {Component, OnInit} from "@angular/core";
import {Genre, GenreResponse, MovieResponse} from "../../models/media.model";
import {MoviesService} from "../../services/movies.service";


@Component({
    selector: 'app-discover',
    templateUrl: './discover.component.html',
    styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

    public genres: Array<Genre> = [];
    public genre: Genre|null = null;
    public movies: MovieResponse = null;

    constructor(private movieService: MoviesService) {
    }

    ngOnInit(): void {
        this.movieService.getGenres("de-CH").subscribe((response: GenreResponse) => {
            this.genres = response.genres;
        });
    }

    public select(genre: Genre) {
        this.genre = genre;
        this.goTo(1);
    }

    public goTo(page: number) {
        this.movieService.discover(this.genre.id, page).subscribe((response) => {
            this.movies = response;
        });
    }

}
