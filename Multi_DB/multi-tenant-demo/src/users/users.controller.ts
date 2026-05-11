import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

import { CreateUserDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { Tenant } from './entities/db-tenant.decorator/db-tenant.decorator';

@Controller('users')
export class UsersController {

  constructor(
    private readonly service: UsersService,
  ) {}

  @Post('tenant')
  async createUser(
    @Tenant() tenant: string,
    @Body() dto: CreateUserDto,
  ) {
    return this.service.createUser(
      tenant,
      dto,
    );
  }

  @Get('tenants')
  async getAllUser(
    @Tenant() tenant: string,
  ) {
    return this.service.getUsers(tenant);
  }
}