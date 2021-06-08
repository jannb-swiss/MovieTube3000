import {Component, Input} from "@angular/core";
import {Media} from "../../models/media.model";
import {TMDBService} from "../../services/tmdb.service";
import {MovieModalService} from "../../services/movie-modal.service";


@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent {

    public details: Media | null;
    public image: string;

    @Input()
    set movie(movie: Media | null) {
        this.details = movie;
        if(movie !== null) {
            this.tmdb.getConfiguration().subscribe(config => {
                this.image = `${config.images.secure_base_url}${config.images.poster_sizes[4]}${movie.poster_path}`;
            });
        }
    }

    constructor(private tmdb: TMDBService, private modal: MovieModalService) {}

    public click() {
        this.modal.showMovie(this.details);
    }

}
