import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Media} from "../models/media.model";


@Injectable({
  providedIn: 'root'
})
export class MovieModalService {

  movie: Subject<Media> = new Subject<Media>();

  showMovie(movie: Media | null) {
    this.movie.next(movie);
  }

}
