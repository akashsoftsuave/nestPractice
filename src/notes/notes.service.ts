import { Injectable } from '@nestjs/common';
import { Note } from './entities/notes.entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NotesService {
  constructor(@InjectRepository(Note) private noteRepo: Repository<Note>) {}

  getNotes() {
    return this.noteRepo.find();
  }

  createNote(noteData: { userId: number; title: string; description: string }) {
    try {
      const newNote = this.noteRepo.create({
        ...noteData,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return this.noteRepo.save(newNote);
    } catch (err) {
      console.error('Error creating note:', err);
      throw err;
    }
  }
}
