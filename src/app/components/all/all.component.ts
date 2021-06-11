import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Genre, GenreResponse, MovieResponse} from "../../models/media.model";
import {MoviesService} from "../../services/movies.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  public sticky = false;
  public cinema: MovieResponse | null = null;
  public popular: MovieResponse | null = null;
  public best: MovieResponse | null = null;
  public genres: Array<Genre> = [];
  public selectedGenre: Genre | null = null;
  public movies: MovieResponse | null = null;


  public sliderConfig = {
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: true,
    autoplay: false
  };

  @ViewChild('stickHeader') header: ElementRef;
  headerBGUrl: string;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getPopularMovies("de-CH", "CH").subscribe((data: MovieResponse) => {
      this.popular = data;
    this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + this.popular.results[0].backdrop_path});
    this.moviesService.getMoviesCurrentlyInTheater("de-CH", "CH").subscribe((data: MovieResponse) => (
      this.cinema = data));
    this.moviesService.getBestRatedMovies("de-CH", "CH").subscribe((data: MovieResponse) => (
      this.best = data));
    this.moviesService.getGenres('de-CH').subscribe(response => {
      this.genres = response.genres;
      this.selectGenre(this.genres[0]);
    });
  }
  public selectGenre(genre: Genre): void {
    this.selectedGenre = genre;
    this.discoverGenre(1);
  }

  public discoverGenre(page: number): void {
    if (this.selectedGenre) {
      this.moviesService.discover(this.selectedGenre.id, page).subscribe((response) => {
        this.movies = response;
      });
    }
  }

  @HostListener('window:scroll', ['$event'])
  // tslint:disable-next-line:typedef
  handleScroll() {
    const windowScroll = window.pageYOffset;

    if (windowScroll > this.header.nativeElement.offsetHeight) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  ngOnDestroy(): void {
  }

}
