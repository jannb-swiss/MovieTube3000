import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Media, MovieResponse} from "../../models/media.model";
import {TMDBService} from "../../services/tmdb.service";
import {MovieModalService} from "../../services/movie-modal.service";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Output() onPageChange: EventEmitter<number> = new EventEmitter<number>();

  @Input() sliderConfig;
  @Input() movies: MovieResponse;
  @Input() title: string;

  constructor(private tmdb: TMDBService, private modal: MovieModalService) { }

  ngOnInit(): void {
  }

  public click(movie: Media) {
    this.modal.showMovie(movie);
  }

  public pageChange(page: number): void {
    this.onPageChange.emit(page);
  }


}
