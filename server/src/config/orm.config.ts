import { ConnectionOptions } from 'typeorm';


const OrmConfig: ConnectionOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: [__dirname + '/../**/*.entity.ts'],
    cli: {
        migrationsDir: 'src/migrations',
    },
};

export = OrmConfig;
