import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteBookCardComponent } from './note-book-card.component';

describe('NoteBookCardComponent', () => {
  let component: NoteBookCardComponent;
  let fixture: ComponentFixture<NoteBookCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteBookCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteBookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
