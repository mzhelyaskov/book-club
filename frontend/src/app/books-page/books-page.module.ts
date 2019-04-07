import {NgModule} from '@angular/core';
import {AppBooksPageRoutingModule} from '@@app/books-page/books-page-routing.module';
import {AppBookComponent} from '@@books-page/components/book/book.component';
import {AppBooksPageComponent} from '@@books-page/components/book-page/books-page.component';
import {BooksService} from '@@books-page/services/books.service';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {booksReducer} from '@@books-page/store/books.reducer';
import {EffectsModule} from '@ngrx/effects';
import {BookEffects} from '@@books-page/store/book.effects';

@NgModule({
  imports: [
    CommonModule,
    AppBooksPageRoutingModule,
    StoreModule.forFeature('books', booksReducer),
    EffectsModule.forRoot([BookEffects])
  ],
  declarations: [
    AppBooksPageComponent,
    AppBookComponent
  ],
  exports: []
})
export class AppBooksPageModule {}
