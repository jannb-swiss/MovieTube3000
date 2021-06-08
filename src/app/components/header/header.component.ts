import {Component, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";
import {Media, MovieResponse} from "../../models/media.model";
import {MoviesService} from "../../services/movies.service";
import {MovieModalService} from "../../services/movie-modal.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    sticky = false;
    public sbar = new FormControl();
    public predictions: Array<Media>;

    constructor(private moviesService: MoviesService, private modal: MovieModalService) { }

    ngOnInit(): void {
        this.sbar.valueChanges.subscribe(keyword => this.refreshPredictions(keyword));
    }

    refreshPredictions(keyword: string) {
        if (keyword != "") {
            this.moviesService.find(keyword, 1).subscribe((data: MovieResponse) => {
                this.predictions = data.results;
            })
        } else {
            this.predictions = null;
        }
    }

    public click(movie: Media) {
        this.modal.showMovie(movie);
    }

}
