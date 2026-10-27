import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  async create(dto: CreateContactDto) {
    console.log('[DB] salvar contato:', dto);
    // ex: await this.repo.save(dto)
    return { ok: true, received: dto };
  }
}
