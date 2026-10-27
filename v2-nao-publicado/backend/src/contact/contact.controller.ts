import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly service: ContactService) {}
  @Post()
  async create(@Body() dto: CreateContactDto) {
    // TODO: salvar no MySQL via TypeORM/Prisma
    return this.service.create(dto);
  }
}
