import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateMainpageDto } from './create-mainpage.dto';

@InputType()
export class UpdateMainpageInputType extends PartialType(CreateMainpageDto) {}

@InputType()
export class UpdateMainpageDto {
  @Field((type) => Number)
  id: number;

  @Field((type) => UpdateMainpageInputType)
  data: UpdateMainpageInputType;
}
