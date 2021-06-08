import {TMDBService} from "../../services/tmdb.service";
import {MovieModalService} from "../../services/movie-modal.service";
import {Observable, of} from "rxjs";
import {ConfigurationResponse} from "../../models/media.model";
import {TestBed} from "@angular/core/testing";
import {GridComponent} from "./grid.component";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";


describe('GridComponent', () => {

    let fixture, component, el;

    let tMDBServiceStub:  Partial<TMDBService>;
    let movieModalServiceStub: Partial<MovieModalService>;

    beforeEach(async ()  => {

        tMDBServiceStub = {
            getConfiguration: (): Observable<ConfigurationResponse> => of({
                images: {
                    base_url: 'http://example.com/',
                    secure_base_url: 'https://example.com/',
                    backdrop_sizes: [],
                    logo_sizes: [],
                    poster_sizes: [],
                    profile_sizes: [],
                    still_sizes: []
                }
            })
        };

        movieModalServiceStub = {
            showMovie: () => {
                return null;
            }
        };

        await TestBed.configureTestingModule({
          declarations: [GridComponent],
          imports: [HttpClientModule],
          providers: [
            HttpClientTestingModule,
            {provide: TMDBService, useValue: tMDBServiceStub},
            {provide: MovieModalService, useValue: movieModalServiceStub}
          ]
        }).compileComponents();

        fixture = TestBed.createComponent(GridComponent);

        component = fixture.componentInstance;

        //@ts-ignore
        const movie: Media = {
            title: 'test',
            poster_path: 'test.jpg',
        };

        component.movie = movie;

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show grid when movie is given', () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.movie-grid h2')?.textContent).toBe('test');
    });

});
