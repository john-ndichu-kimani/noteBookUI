import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule, DatePipe } from '@angular/common';
import { SearchPipe } from '../../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { NotesService } from '../../services/notes.service';
import { note } from '../../interfaces/notebook';

@Component({
  selector: 'app-note-book-card',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule, DatePipe, SearchPipe],
  templateUrl: './note-book-card.component.html',
  styleUrls: ['./note-book-card.component.css']
})
export class NoteBookCardComponent implements OnInit {

  showConfirmDelete: boolean = false;
  notes: note[] = [];
  searchString: string = '';

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.fetchNotes();
  }

  fetchNotes() {
    this.notesService.fetchNotes().subscribe({
      next: (res) => {
        this.notes = res.notes;
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
