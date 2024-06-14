import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NoteBookCardComponent } from './components/note-book-card/note-book-card.component';
import { CreateNoteFormComponent } from './components/create-note-form/create-note-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,NoteBookCardComponent,CreateNoteFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'noteBookUI';
}
