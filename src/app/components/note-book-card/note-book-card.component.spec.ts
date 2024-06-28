import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NoteBookCardComponent } from './note-book-card.component';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('NoteBookCardComponent', () => {
  let component: NoteBookCardComponent;
  let fixture: ComponentFixture<NoteBookCardComponent>;
  let mockActivatedRoute = {
    params: of({ note_id: '' })
  };

  let notesServiceSpy: any;
  let el: DebugElement;

  beforeEach(async () => {
    notesServiceSpy = jasmine.createSpyObj('NotesService', ['fetchNotes', 'updateNote', 'deleteNote']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: NotesService, useValue: notesServiceSpy },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();

    notesServiceSpy.fetchNotes.and.returnValue(of({
      noteBooks: [
        { id: '1', title: 'Note 1', content: 'Content 1' },
        { id: '2', title: 'Note 2', content: 'Content 2' },
        { id: '3', title: 'Note 3', content: 'Content 3' }
      ]
    }));

    notesServiceSpy.updateNote.and.returnValue(of({
      message: "note updated successfully"
    }));

    notesServiceSpy.deleteNote.and.returnValue(of({
      message: "note deleted successfully"
    }));

    fixture = TestBed.createComponent(NoteBookCardComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and display notes', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.noteBooks.length).toBe(3);
  });

  it('should delete note and refresh the list', (done: DoneFn) => {
    const cards = el.queryAll(By.css('.delete'));
    cards[0].triggerEventHandler('click', null);
    fixture.detectChanges();

    setTimeout(() => {
      expect(notesServiceSpy.deleteNote.calls.any()).toBe(true);
      done();
    }, 500);
  });
});
