import {Component, OnInit} from "@angular/core";
import {Media, MovieResponse} from "../../models/media.model";
import {MoviesService} from "../../services/movies.service";
import {LikesService} from "../../services/likes.service";
import {Like, LikeResponse} from "../../models/like.model";

@Component({
    selector: 'app-favorite-movies',
    templateUrl: './favorite-movies.component.html',
    styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent implements OnInit {

    movies: MovieResponse = {
        total_pages: 1,
        page: 1,
        total_results: 1,
        results: [],
    };

    constructor(private movieService: MoviesService, private likeService: LikesService) { }

    private load(): void {
        this.likeService.getLikes().subscribe((response: LikeResponse) => {
            if(response.status === 200) {
                response.payload.map((like: Like) => {
                    this.movieService.getById(like.movie).subscribe((movie: Media) => {
                        this.movies.results.push(movie);
                    });
                });
            }
        });
    }

    ngOnInit(): void {
        this.load();
    }

}
