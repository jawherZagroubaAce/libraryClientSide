import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './pages/library/library.component';
import { LibraryGuard } from './guards/library.guard';
import { BooksResolver } from './resolvers/books.resolver';

const routes: Routes = [{ path: '', component: LibraryComponent, canActivate: [LibraryGuard], resolve: { books: BooksResolver } }, { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
