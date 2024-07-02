// src/user/user.resolver.ts

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './user.schema';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto/update-user.dto';
import { UserService } from './users.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBadRequestResponse, ApiNotFoundResponse } from '@nestjs/swagger';

@ApiTags('users') // Swagger tag for the users resolver
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users.' })
  async users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => User)
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiNotFoundResponse({ description: 'User not found.' })
  async user(@Args('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'The user has been successfully created.', type: User })
  @ApiBadRequestResponse({ description: 'Invalid input data.' })
  async createUser(@Args('input') createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Mutation(() => User)
  @ApiOperation({ summary: 'Update a user' })
  @ApiResponse({ status: 200, description: 'The user has been successfully updated.', type: User })
  @ApiNotFoundResponse({ description: 'User not found.' })
  async updateUser(@Args('id') id: string, @Args('input') updateUserDto: UpdateUserDto): Promise<User> {
    return this.userService.update(id, updateUserDto);
  }

  @Mutation(() => User)
  @ApiOperation({ summary: 'Soft delete a user' })
  @ApiResponse({ status: 200, description: 'The user has been successfully deleted.', type: User })
  @ApiNotFoundResponse({ description: 'User not found.' })
  async softDeleteUser(@Args('id') id: string): Promise<User> {
    return this.userService.remove(id);
  }
}
