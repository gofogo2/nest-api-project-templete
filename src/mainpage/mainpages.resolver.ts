import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateMainpageDto } from './dtos/create-mainpage.dto';
import { UpdateMainpageDto } from './dtos/update-mainpage.dto';
import { MainPage } from './entities/mainpage.entity';
import { MainpageService } from './Mainpages.service';

@Resolver((of) => MainPage)
export class MainpageResolver {
  constructor(private readonly mainPageService: MainpageService) {}

  @Query((returns) => [MainPage])
  mainpages(): Promise<MainPage[]> {
    return this.mainPageService.getAll();
  }

  @Mutation((returns) => Boolean)
  async createMainpage(
    @Args('input') createMainpageDto: CreateMainpageDto,
  ): Promise<boolean> {
    console.log(createMainpageDto);
    try {
      await this.mainPageService.createMainpage(createMainpageDto);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  @Mutation((returns) => Boolean)
  async updateMainpage(
    @Args('input') updateMainpageDto: UpdateMainpageDto,
  ): Promise<boolean> {
    try {
      await this.mainPageService.updateMainpage(updateMainpageDto);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
