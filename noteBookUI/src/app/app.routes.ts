import { Routes } from '@angular/router';
import { CreateNoteFormComponent } from './components/create-note-form/create-note-form.component';
import { AppComponent } from './app.component';
import { NoteBookCardComponent } from './components/note-book-card/note-book-card.component';

export const routes: Routes = [
  {path:'',component:NoteBookCardComponent},
  {path:'home',pathMatch:'full',redirectTo:''},
  {path:'create',component: CreateNoteFormComponent}
];
