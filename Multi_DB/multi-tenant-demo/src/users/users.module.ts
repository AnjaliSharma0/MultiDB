import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TenantService } from './entities/db-tenant.decorator/users.tenant.service';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    TenantService
  ]
})
export class UsersModule {}
