import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { note } from '../interfaces/notebook';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }

  createNote(noteDetails: note) {
    return this.http.post<{ message?: string, error?: string }>('http://localhost:5203/books/create-new', noteDetails);
  }

  fetchOneNote(noteId: string) {
    return this.http.get<{ note: note }>(`http://localhost:5203/books/single/${noteId}`);
  }

  fetchNotes() {
    return this.http.get<{
      noteBooks: note[]; notes: note[]
}>(`http://localhost:5203/books/all`);
  }

  updateNote(noteId: string, note: note) {
    return this.http.put<{ message?: string, error?: string }>(`http://localhost:5203/books/update/${noteId}`, note);
  }

  deleteNote(noteId: string) {
    return this.http.delete<{ message?: string, error?: string }>(`http://localhost:5203/books/delete/${noteId}`);
  }
}
