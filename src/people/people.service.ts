import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonModel } from 'src/infra/database/typeOrm/models/person.entity';
import { PersonEntity } from './entities/person.entity';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(PersonModel)
    private peopleRepository: Repository<PersonModel>,
  ) {}

  async create(createPersonDto: CreatePersonDto): Promise<void> {
    try {
      await this.peopleRepository.save(createPersonDto);
    } catch (err) {
      throw new Error(err);
    }
  }

  async findAll(): Promise<PersonEntity[]> {
    try {
      return await this.peopleRepository.find();
    } catch (err) {
      throw new Error(err);
    }
  }

  async findOne(id: number): Promise<PersonEntity> {
    try {
      return await this.peopleRepository.findOneBy({ id_pessoa: id });
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(id: number, updatePersonDto: UpdatePersonDto): Promise<void> {
    try {
      await this.peopleRepository.update(id, updatePersonDto);
    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(id: number): Promise<void> {
    try {
      await this.peopleRepository.delete(id);
    } catch (err) {
      throw new Error(err);
    }
  }
}
