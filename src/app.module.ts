import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground:true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest-graphql-mongodb'),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
