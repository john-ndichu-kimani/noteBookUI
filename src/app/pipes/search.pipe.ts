import { Pipe, PipeTransform } from '@angular/core';
import { note } from '../interfaces/notebook';


@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(notes: note[], searchString: string): note[] {
    if (!notes || searchString == '') {
      return notes;
    }

    let filteredNotes: note[] = [];

    for (let note of notes) {
      if (
        note.content.toLowerCase().includes(searchString.toLowerCase()) ||
        note.title.toLowerCase().includes(searchString.toLowerCase())
      ) {
        filteredNotes.push(note);
      }
    }

    return filteredNotes;
  }
}
