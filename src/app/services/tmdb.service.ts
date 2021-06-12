import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ConfigurationResponse} from "../models/media.model";
import {HttpClient} from "@angular/common/http";
import {MoviesService} from "./movies.service";


@Injectable({
  providedIn: "root"
})
export class TMDBService {

  private readonly configuration: Observable<ConfigurationResponse>;

  constructor(private http: HttpClient) {
    this.configuration = this.http.get<ConfigurationResponse>(MoviesService.getUrl(`configuration`));
  }

  public getConfiguration(): Observable<ConfigurationResponse> {
    return this.configuration;
  }

}
