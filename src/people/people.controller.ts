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
import { FindPeopleResponseDto } from './dto/find-people-response.dto';
import { FindPersonResponseDto } from './dto/find-person-response.dto';

@Controller('person')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post()
  async create(@Body() createPersonDto: CreatePersonDto): Promise<void> {
    return await this.peopleService.create(createPersonDto);
  }

  @Get()
  async findAll(): Promise<FindPeopleResponseDto> {
    const pessoas = await this.peopleService.findAll();
    return { pessoas };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<FindPersonResponseDto> {
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
