import { Injectable } from '@nestjs/common';
import { TenantService } from './entities/db-tenant.decorator/users.tenant.service';
import { CreateUserDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {

    constructor(private readonly tenantDB: TenantService){}

    async createUser(
        tenant: string,
        dto: CreateUserDto
    ){
       const db = await this.tenantDB.getDataSource(tenant)
       const userRepo= db.getRepository(UserEntity)
       const user = userRepo.create(dto)
       return await userRepo.save(user)
    }

    async getUsers(tenant: string){
        const db =
      await this.tenantDB.getDataSource(
        tenant,
      );

    return db.getRepository(UserEntity).find();
  }
}
