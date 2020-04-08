import { Company } from "./company.entity";
import { Repository, EntityRepository } from "typeorm";
import { CreateCompanyDto } from "./dto/create-company-dto";
import { UseGuards, UnauthorizedException, ConflictException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { User } from "src/auth/user.entity";

@EntityRepository(Company)
export class CompanyRepository extends Repository<Company> {

    async createCompany(createCompanyDto: CreateCompanyDto, user: User): Promise<Company> {
        const { name, address, city, country, extraInfo,
            houseNumber,
            kvkNumber,
            openHours,
            postCode,
            services,
            url } = createCompanyDto;
        const company = new Company();

        company.user = user;
        company.name = name;
        company.address = address;
        company.city = city;
        company.country = country;
        company.extraInfo = extraInfo;
        company.kvkNumber = kvkNumber;
        company.houseNumber = houseNumber;
        company.openHours = openHours;
        company.postCode = postCode;
        company.url = url;
        company.services = services;


        try {
            await company.save()
        } catch (error) {
            console.log(error);
            throw new ConflictException("efjioa");
        }
        return company;
    }
}