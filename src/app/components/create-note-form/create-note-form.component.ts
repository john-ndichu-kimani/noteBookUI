import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import {FormsModule, NgForm} from '@angular/forms'
import { noteBook } from '../../interfaces/notebook';

@Component({
  selector: 'app-create-note-form',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent,
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './create-note-form.component.html',
  styleUrl: './create-note-form.component.css'
})
export class CreateNoteFormComponent {

  constructor(){}

  success: boolean = false;
  error: boolean = false;

  notes: noteBook[] = [];

  newNote: noteBook = { id: '001', title: 'note one', content: 'welcome to view my notes 1' };

  addNoteBook() {
    this.notes.push(this.newNote);
  }

  // Method to delete a note
  deleteNote(id: string) {
    this.notes = this.notes.filter(note => note.id !== id);
  }

  onSubmit(){
this.success = true

  }
}
