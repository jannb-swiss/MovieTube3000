import {Component, ElementRef, HostListener, OnInit, ViewChild} from "@angular/core";
import {Media, MovieResponse} from "../../models/media.model";
import {MoviesService} from "../../services/movies.service";
import {MovieModalService} from "../../services/movie-modal.service";
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    sticky = false;
    public searchBar = new FormControl();
    public movieForecast: Array<Media>;

    constructor(private moviesService: MoviesService, private modal: MovieModalService) { }

  @ViewChild('stickHeader') header: ElementRef;

    ngOnInit(): void {
        this.searchBar.valueChanges.subscribe(keyword => this.refreshPredictions(keyword));
    }

  @HostListener('window:scroll', ['$event'])
  // tslint:disable-next-line:typedef
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (this.header && this.header.nativeElement) {
      this.sticky = windowScroll > this.header.nativeElement.offsetHeight;
    }
  }

    refreshPredictions(keyword: string) {
            this.moviesService.find(keyword).subscribe((data: MovieResponse) => {
                this.movieForecast = data.results;
            })
        }

    public click(movie: Media) {
        this.modal.showMovie(movie);
    }

}
