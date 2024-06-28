import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { note } from '../../interfaces/notebook';
import { CommonModule, DatePipe } from '@angular/common';
import { SearchPipe } from '../../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { NotesService } from '../../services/notes.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-note-book-card',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule, DatePipe, SearchPipe,RouterLink],
  templateUrl: './note-book-card.component.html',
  styleUrls: ['./note-book-card.component.css']
})
export class NoteBookCardComponent implements OnInit {

  showConfirmDelete: boolean = false;
  noteBooks: note[] = [];
  searchString: string = '';

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.fetchNotes();
  }

  fetchNotes() {
    this.notesService.fetchNotes().subscribe({
      next: (res) => {
        this.noteBooks = res.noteBooks;


      },
      error: (err) => {
        console.error('Error fetching notes:', err);
      }
    });
  }

  deleteNote(noteId: string) {
    this.notesService.deleteNote(noteId).subscribe({
      next: () => {
        this.fetchNotes();
      },
      error: (err) => {
        console.error('Error deleting note:', err);
      }
    });
  }

  confirmDelete(noteId: string) {
    this.showConfirmDelete = true;
  }

  cancelDelete() {
    this.showConfirmDelete = false;
  }

  editNote(id: string, editedNote: note) {
    this.notesService.updateNote(id, editedNote).subscribe({
      next: () => {
        this.fetchNotes();
      },
      error: (err) => {
        console.error('Error updating note:', err);
      }
    });
  }
}
