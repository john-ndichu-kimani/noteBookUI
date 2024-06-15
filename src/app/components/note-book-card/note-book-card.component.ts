import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { noteBook } from '../../interfaces/notebook';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-note-book-card',
  standalone: true,
  imports: [HeaderComponent,CommonModule],
  templateUrl: './note-book-card.component.html',
  styleUrl: './note-book-card.component.css'
})
export class NoteBookCardComponent {

  showConfirmDelete: boolean =false;

  notes:noteBook[]=[

    { id: '001', title: 'Team Meeting', content: 'Discuss project timelines and goals' },
    { id: '002', title: 'Shopping List', content: 'Milk, eggs, bread, fruits' },
    { id: '003', title: 'Book Club Discussion', content: 'Review chapters 5-8 of "The Great Gatsby"' },
    { id: '004', title: 'Fitness Goals', content: 'Run 5 miles, do 50 push-ups, 100 sit-ups' }

  ];

  deleteNoteId: string | null = null;

  confirmDelete(noteId: string) {
    this.showConfirmDelete = true;
    this.deleteNoteId = noteId;
  }

  deleteNote(noteId: string) {
    this.notes = this.notes.filter(note => note.id !== noteId);
    this.cancelDelete();
  }

  cancelDelete() {
    this.showConfirmDelete = false;
    this.deleteNoteId = null;
  }


  }




