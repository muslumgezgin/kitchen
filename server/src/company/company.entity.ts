import { PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Entity, BaseEntity } from "typeorm";
import { User } from "src/auth/user.entity";

@Entity()
export class Company extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    url: string

    @Column()
    address: string

    @Column()
    houseNumber: string

    @Column()
    postCode: string

    @Column()
    kvkNumber: string

    @Column()
    city: string

    @Column()
    country: string


    @Column("simple-array",{ array: true, })
    services: Set<string>

    @Column()
    extraInfo: string

    @Column("simple-array",{ array: true })
    openHours: Set<string>

    @OneToOne(type => User)
    @JoinColumn()
    user: User;
}