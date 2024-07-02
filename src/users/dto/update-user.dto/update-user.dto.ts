// src/users/dto/update-user.dto.ts
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateUserDto } from '../create-user.dto/create-user.dto';

@InputType()
export class UpdateUserDto extends PartialType(CreateUserDto) {}
