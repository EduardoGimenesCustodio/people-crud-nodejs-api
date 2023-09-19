import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PersonEntity } from './entities/person.entity';

@Controller('person')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post()
  async create(@Body() createPersonDto: CreatePersonDto): Promise<void> {
    return await this.peopleService.create(createPersonDto);
  }

  @Get()
  async findAll(): Promise<{ pessoas: PersonEntity[] }> {
    const pessoas = await this.peopleService.findAll();
    return { pessoas };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<{ pessoa: PersonEntity }> {
    const pessoa = await this.peopleService.findOne(+id);
    return { pessoa };
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePersonDto: UpdatePersonDto,
  ): Promise<void> {
    return await this.peopleService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.peopleService.remove(+id);
  }
}
