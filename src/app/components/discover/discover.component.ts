import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Genre, GenreResponse, MovieResponse} from "../../models/media.model";

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
        this.goTo();
    }

    public goTo() {
        this.movieService.discover(this.genre.id).subscribe((response) => {
            this.movies = response;
        });
    }

}
