import {Component, EventEmitter, Input, Output} from "@angular/core";
import {MovieResponse} from "../../models/media.model";


@Component({
    selector: 'app-grid-container',
    templateUrl: './grid-container.component.html',
    styleUrls: ['./grid-container.component.scss']
})
export class GridContainerComponent {

    public input: MovieResponse|null = null;
    public pages: Array<number> = [];

    @Input() title: string;
    @Output() pageEvent = new EventEmitter<number>();

    @Input()
    set movies(movies: MovieResponse|null) {
        this.input = movies;
        if(movies !== null) {
            this.getPagination();
        }
    }

    private getPagination() {
        const maxPage = this.input.page + 5 > this.input.total_pages
            ? this.input.total_pages
            : this.input.page + 2;
        this.pages = [];
        // first page
        if(this.input.page > 2) {
            this.pages.push(1);
        }
        // previous pages
        for(let i = this.input.page - 1; i > 0 && i > this.input.page - 2; i--) {
            this.pages.push(i);
        }
        // next pages
        for(let i = this.input.page; i < maxPage; i++) {
            this.pages.push(i);
        }
        // last page
        this.pages.push(this.input.total_pages);
    }

    public goTo = (page: number) => {
        this.pageEvent.emit(page);
    };

    constructor() {
    }

}
