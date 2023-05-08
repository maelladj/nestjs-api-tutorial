import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from 'D:/Documents/PILINK/Tutos/nestjs-api-tutorial/node_modules/.prisma/client';


@Injectable()
export class PrismaService extends PrismaClient{
    private _user: any;
  public get user(): any {
    return this._user;
  }
  public set user(value: any) {
    this._user = value;
  }
    constructor(config: ConfigService) {
      super({
        datasources: {
          db: {
            url: config.get('DATABASE_URL'),
          }  
        }
      })  
    }
}
