import {Component, Input, Renderer2} from "@angular/core";
import {Media, MovieDetails} from "../../models/media.model";
import {TMDBService} from "../../services/tmdb.service";
import {MovieModalService} from "../../services/movie-modal.service";
import {MoviesService} from "../../services/movies.service";
import {LikesService} from "../../services/likes.service";
import {formatDate} from "../../utility/string.utility";


@Component({
    selector: "app-movie",
    templateUrl: "./movie.component.html",
    styleUrls: ["./movie.component.scss"]
})
export class MovieComponent {

    public image: string;
    public movie: Media | null;
    public details: MovieDetails | null;
    public isLiked: boolean = false;
    public isLoading: boolean = true;

    @Input()
    set media(movie: Media | null) {
        if (movie !== null) {
            this.movie = movie;
            this.likeService.isLiked(movie).subscribe((response) => {
                this.isLiked = response.status === 204;
            });
            this.movieService.getDetails(movie).subscribe(details => {
                this.details = details;
                this.isLoading = false;
            });
            this.tmdb.getConfiguration().subscribe(config => {
                this.image = `${config.images.secure_base_url}${config.images.poster_sizes[4]}${movie.poster_path}`;
            });
        } else {
            this.movie = null;
            this.details = null;
            this.isLoading = true;
        }
    }

    constructor(
        private tmdb: TMDBService,
        private modal: MovieModalService,
        private movieService: MoviesService,
        private likeService: LikesService,
        private renderer: Renderer2
    ) {
        this.renderer.listen('window', 'click',(e:Event)=>{
            if(e.target == document.getElementById('movie') && this.movie !== null){
                this.hide();
            }
        });
    }

    public hide = (): void  =>this.modal.showMovie(null);

    public getMovieDate = () => formatDate(this.details.release_date);

    public like = (): any => this.isLiked
        ? this.likeService.unlike(this.movie).subscribe(
            (response: Response) => this.changeLikeStateFromResponse(response)
        )
        : this.likeService.like(this.movie).subscribe(
            (response: Response) => this.changeLikeStateFromResponse(response)
        );

    private changeLikeStateFromResponse(response: Response): void {
        if (response.status === 200) {
            this.isLiked = !this.isLiked
        }
    };

}
