import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { NotesService } from './notes.service';
import { new_note, notes } from '../testData';

describe('NotesService', () => {
  let service: NotesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NotesService, provideHttpClient(), provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(NotesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a single note by ID', () => {
    const noteId = '7b1faea8-97f4-4fab-a954-05f481643755';
    const expectedNote = notes.find(note => note.id === noteId);

    service.fetchOneNote(noteId).subscribe(res => {
      expect(res.note).toBeTruthy();
      expect(res.note.id).toBe(noteId);
    });

    const req = httpTestingController.expectOne(`http://localhost:5203/books/single/${noteId}`);
    expect(req.request.method).toEqual('GET');

    req.flush({ note: expectedNote });
  });

  it('should create a new note', () => {
    service.createNote(new_note).subscribe(res => {
      expect(res.message).toBe("Note created successfully");
    });

    const req = httpTestingController.expectOne('http://localhost:5203/books/create-new');
    expect(req.request.method).toEqual("POST");
    expect(req.request.body.content).toEqual(new_note.content);

    req.flush({ message: "Note created successfully" });
  });

  it('should get all notes', () => {
    service.fetchNotes().subscribe(res => {
      expect(res).toBeTruthy();
      expect(res.notes.length).toBe(notes.length);

      const note = res.notes.find(note => note.id == '3ab3d1c5-8b39-4ce3-86c4-fd153211306d');
      expect(note?.title).toBe('Fitness Goals');
    });

    const req = httpTestingController.expectOne('http://localhost:5203/books/all');
    expect(req.request.method).toEqual("GET");

    req.flush({ notes });
  });
});
