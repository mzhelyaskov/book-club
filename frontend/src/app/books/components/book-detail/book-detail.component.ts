import {Component, OnInit} from '@angular/core';
import {BooksReduxService} from '@@books/services/books-redux.service';
import {Observable} from 'rxjs/index';
import {RouterReduxService} from '@@router/services/router-redux.service';
import {BookModel} from '@@share/models/book.model';
import {first} from 'rxjs/internal/operators';

@Component({
  selector: 'app-book-detail-component',
  templateUrl: './book-detail.component.html',
})
export class AppBookDetailComponent implements OnInit {

  book$: Observable<BookModel> = this.booksReduxService.bookDetail$;

  constructor(private booksReduxService: BooksReduxService,
              private routerReduxService: RouterReduxService) {}

  ngOnInit() {
    const id: string = this.routerReduxService.getBookId();
    this.booksReduxService.fetchBookById(id);
  }
}
