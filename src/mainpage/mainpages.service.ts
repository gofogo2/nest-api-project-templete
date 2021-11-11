import { UpdateMainpageDto } from './dtos/update-mainpage.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMainpageDto } from './dtos/create-mainpage.dto';
import { MainPage } from './entities/mainpage.entity';

@Injectable()
export class MainpageService {
  constructor(
    @InjectRepository(MainPage)
    private readonly repository: Repository<MainPage>,
  ) {}
  getAll(): Promise<MainPage[]> {
    return this.repository.find();
  }

  createMainpage(createMainpageDto: CreateMainpageDto): Promise<MainPage> {
    const newMainpage = this.repository.create(createMainpageDto);
    return this.repository.save(newMainpage);
  }

  updateMainpage({ id, data }: UpdateMainpageDto) {
    return this.repository.update(id, { ...data });
  }
}
