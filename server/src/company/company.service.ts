import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company-dto'
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyRepository } from './company.repository';
import { User } from 'src/auth/user.entity';
import { Company } from './company.entity';

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(CompanyRepository) 
        private companyRepository:CompanyRepository,
    ){};

    async createCompany(createCompanyDto: CreateCompanyDto,user:User):Promise<Company>
    {
       return  this.companyRepository.createCompany(createCompanyDto,user);
    }
}
