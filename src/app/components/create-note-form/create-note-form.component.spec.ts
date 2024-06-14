import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNoteFormComponent } from './create-note-form.component';

describe('CreateNoteFormComponent', () => {
  let component: CreateNoteFormComponent;
  let fixture: ComponentFixture<CreateNoteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNoteFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
