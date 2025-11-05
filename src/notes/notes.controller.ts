import { Controller, Get, Post, Body } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get('getNotes')
  getNotes() {
    return this.notesService.getNotes();
  }
  @Post('createNote')
  createNote(@Body() noteData: CreateNoteDto) {
    try {
      return this.notesService.createNote(noteData);
    } catch (err) {
      console.error('Error in controller while creating note:', err);
      throw err;
    }
  }
}
