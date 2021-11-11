import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainPage } from './entities/mainpage.entity';
import { MainpageResolver } from './Mainpages.resolver';
import { MainpageService } from './Mainpages.service';

@Module({
  imports: [TypeOrmModule.forFeature([MainPage])],
  providers: [MainpageResolver, MainpageService],
})
export class MainpagesModule {}
