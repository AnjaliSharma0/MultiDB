import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { UserEntity } from "../user.entity";

@Injectable()
export class TenantService{
   private dataSources : Map<string, DataSource> = 
   new Map()  

   async getDataSource(
      tenant: string
   ):Promise<DataSource>{
      if(!tenant){
         throw new Error('Tenant is required')
      }

      const allowedTenants=[
         "one",
         "two"
      ]

      if(!allowedTenants.includes(tenant)){
         throw new Error("Tenant is invalid")
      }

      if(this.dataSources.has(tenant)){
         return this.dataSources.get(tenant)!;
      }

      const dataSource = new DataSource({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'Anjali2204',
            database: `db_${tenant}`,
            entities: [UserEntity],
            synchronize: true,
      })

      await dataSource.initialize()
      this.dataSources.set(
         tenant, 
         dataSource
      )
      return dataSource;
   }
}