import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { note } from '../../interfaces/notebook';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-create-note-form',
  standalone: true,
  imports: [RouterLink, HeaderComponent, CommonModule, FormsModule],
  templateUrl: './create-note-form.component.html',
  styleUrls: ['./create-note-form.component.css'],
})
export class CreateNoteFormComponent {
  notes: note[] = [];
  success: boolean = false;
  error: boolean = false;
  newNote: note = { id: '', title: '', content: '',createdAt:'' }; // Adjust the properties based on your note interface

  constructor(private notesService: NotesService) {}

  createNote() {
    this.notesService.createNote(this.newNote).subscribe({
      next: (response) => {
        if (response.message) {
          this.success = true;
          this.error = false;
          this.notes.push(this.newNote);
          this.newNote = { id: '', title: '', content: '',createdAt:'' }; 
        } else if (response.error) {
          this.success = false;
          this.error = true;
        }
      },
      error: () => {
        this.success = false;
        this.error = true;
      }
    });
  }
}
