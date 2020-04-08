import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt';
import { AuthCredantialsDto } from "./dto/auth-credetials.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { RolesEnum } from "./user.roles.enum";
import { Roles } from "./role.decarotor";



@EntityRepository(User)
export class UserRepository extends Repository<User>
{
    async signup(authCredentialsDto: AuthCredantialsDto): Promise<void> {

        const { username, password, roles } = authCredentialsDto;

        const salt = await bcrypt.genSalt();
        const user = new User();
        user.username = username;
        user.salt = salt;
        user.roles = roles;
        user.password = await this.hashPassword(password, salt);

        if (user.roles !== RolesEnum.Company && user.roles !== RolesEnum.User) {
            throw new ConflictException('Roles not credentials');
        }
        try {
            await user.save();
        }
        catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('username already exists');

            }
            else {
                throw new InternalServerErrorException();
            }

        }



    }

    async validateUserPassword(authCredentialsDto: AuthCredantialsDto): Promise<{ username: string, roles: RolesEnum }> {
        const { username, password } = authCredentialsDto;

        const user = await this.findOne({ username });

        const { roles } = user;
        if (user && await user.validatePassword(password)) {
            return { username: user.username, roles };
        }
        else {
            return null;
        }


    }
    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }
}