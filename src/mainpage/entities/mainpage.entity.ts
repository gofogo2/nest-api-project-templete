import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class MainPage {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Field((type) => String)
  @Column()
  @IsString()
  @Length(2)
  name: string;

  @Field((type) => Boolean, { nullable: true })
  @Column({ default: true })
  @IsOptional()
  @IsBoolean()
  isTest: boolean;

  @Field((type) => String, { defaultValue: 'description' })
  @Column()
  @IsString()
  description: string;
}
