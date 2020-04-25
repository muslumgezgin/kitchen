import { Controller, UseGuards, Post, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CompanyGuard } from 'src/auth/guards/company-guard';
import { CreateCompanyDto } from './dto/create-company-dto';
import { CompanyService } from './company.service';
import { GetUser } from 'src/auth/get-user-decorator';
import { User } from 'src/auth/user.entity';
import { AuthenticatedGuard } from 'src/auth/guards/authenticated.guard';

@Controller('company')
@UseGuards(AuthenticatedGuard)
export class CompanyController {
    constructor(private companyService:CompanyService){}
    
    @Post('create')
    @UsePipes(ValidationPipe)
    createCompany(@Body(ValidationPipe) createCompanyDto:CreateCompanyDto, @GetUser() user: User){
 
       return this.companyService.createCompany(createCompanyDto,user)
    }
}
