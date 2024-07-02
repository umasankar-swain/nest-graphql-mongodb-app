// src/user/dto/create-user.dto.ts

import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  mobile: string;
}
