import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';
export class CreateContactDto {
  @IsString() @IsNotEmpty() @MaxLength(80) nome!: string;
  @IsEmail() email!: string;
  @IsString() @IsNotEmpty() @MaxLength(2000) mensagem!: string;
}
