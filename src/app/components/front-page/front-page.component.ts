import {Component, OnInit} from "@angular/core";
import {MovieResponse} from "../../models/media.model";
import {MoviesService} from "../../services/movies.service";


@Component({
    selector: "app-front-page",
    templateUrl: "./front-page.component.html",
    styleUrls: ["./front-page.component.scss"]
})
export class FrontPageComponent implements OnInit {

    public popular: MovieResponse|null = null;
    public inTheater: MovieResponse|null = null;

    constructor(private moviesService: MoviesService) {}

    ngOnInit(): void {
        this.getInTheater();
    }

    public getInTheater = (page: number = 1) => {
        console.log(page);
        this.moviesService.getMoviesCurrentlyInTheater("de-CH", page, "CH").subscribe((data: MovieResponse) => {
            this.inTheater = data;
            console.log(data);
        });
    };

}
