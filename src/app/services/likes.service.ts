import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Media} from "../models/media.model";
import {Observable} from "rxjs";
import {LikeResponse} from "../models/like.model";


@Injectable({
    providedIn: "root"
})
export class LikesService {

    private readonly url: string = 'http://localhost:5000';

    constructor(private http: HttpClient) {
    }

    private buildUrl(path: string): string {
        return `${this.url}/${path}`;
    }

    public like(movie: Media): Observable<Response> {
        return this.http.post<Response>(this.buildUrl(`movie/${movie.id}/like`), null);
    }

    public unlike(movie: Media): Observable<Response> {
        return this.http.delete<Response>(this.buildUrl(`movie/${movie.id}/like`));
    }

    public isLiked(movie: Media): Observable<Response> {
        return this.http.get<Response>(this.buildUrl(`movie/${movie.id}`));
    }

    public getLikes(): Observable<LikeResponse> {
        return this.http.get<LikeResponse>(this.buildUrl('likes'));
    }

}
