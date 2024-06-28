import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateNoteFormComponent } from './create-note-form.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CreateNoteFormComponent', () => {
  let component: CreateNoteFormComponent;
  let fixture: ComponentFixture<CreateNoteFormComponent>;

  const mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get: (key: string) => '1'
      }
    },
    params: of({ note_id: '1' })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        CreateNoteFormComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
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
