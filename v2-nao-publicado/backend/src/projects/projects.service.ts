import { Injectable } from '@nestjs/common';
@Injectable()
export class ProjectsService {
  findAll() {
    // TODO: SELECT * FROM projects (MySQL)
    return []; // vazio até ter projetos reais
  }
}
