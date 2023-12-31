import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModel } from '../infra/database/typeOrm/models/person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonModel])],
  exports: [TypeOrmModule],
  controllers: [PeopleController],
  providers: [PeopleService],
})
export class PeopleModule {}
