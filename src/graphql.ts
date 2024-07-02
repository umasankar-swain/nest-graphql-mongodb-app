
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserDto {
    name: string;
    email: string;
    mobile: string;
}

export interface UpdateUserDto {
    name?: Nullable<string>;
    email?: Nullable<string>;
    mobile?: Nullable<string>;
}

export interface User {
    name: string;
    email: string;
    mobile: string;
}

export interface IQuery {
    users(): User[] | Promise<User[]>;
    user(id: string): User | Promise<User>;
}

export interface IMutation {
    createUser(input: CreateUserDto): User | Promise<User>;
    updateUser(id: string, input: UpdateUserDto): User | Promise<User>;
    softDeleteUser(id: string): User | Promise<User>;
}

type Nullable<T> = T | null;
