import { InputType, OmitType } from '@nestjs/graphql';
import { MainPage } from '../entities/mainpage.entity';

@InputType()
export class CreateMainpageDto extends OmitType(MainPage, ['id']) {}
