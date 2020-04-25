import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CompanyRepository } from './company.repository';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([CompanyRepository]),
    AuthModule,
    PassportModule
  ],
  providers: [CompanyService],
  controllers: [CompanyController]
})
export class CompanyModule {}
