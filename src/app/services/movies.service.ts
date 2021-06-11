import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {GenreResponse, Media, MovieDetails, MovieResponse, RequestQueryItem} from "../models/media.model";
import {API_KEY, API_URL, API_VERSION} from "../models/tmdb.model";
import {Observable} from "rxjs";


@Injectable({
  providedIn: "root"
})
export class MoviesService {

  constructor(private http: HttpClient) {
  }

  public static getUrl(uri: string, query: Array<RequestQueryItem> = []): string {
    return `${API_URL}/${API_VERSION}/${uri}?api_key=${API_KEY}` + query.map(item => `&${item.key}=${item.value}`).join('');
  }

  public find(search: string): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(MoviesService.getUrl(`search/movie`, [
      {key: "query", value: search},
    ]));
  }

  public discover(genre: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(MoviesService.getUrl(`discover/movie`, [
      {key: "with_genres", value: genre},
    ]))
  }

  public getPopularMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(MoviesService.getUrl(`movie/popular`));
  }

  public getBestRatedMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(MoviesService.getUrl(`movie/top_rated`));
  }

  public getMoviesCurrentlyInTheater(language: string, region: string): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(MoviesService.getUrl(`movie/now_playing`, [
      {key: "language", value: language},
      {key: "region", value: region},
    ]));
  }

  public getGenres(language: string): Observable<GenreResponse> {
    return this.http.get<GenreResponse>(MoviesService.getUrl(`genre/movie/list`, [
      {key: "language", value: language}
    ]));
  }

  public getDetails(media: Media): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(MoviesService.getUrl(`movie/${media.id}`));
  }

}
