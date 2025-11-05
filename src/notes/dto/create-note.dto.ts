/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateNoteDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
