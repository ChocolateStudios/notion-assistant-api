import { ConfigModule, ConfigService } from "@nestjs/config";
import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

ConfigModule.forRoot({
    envFilePath: `.env.${process.env.NODE_ENV}`,
})

const configService = new ConfigService();

export const DataSourceConfig: DataSourceOptions = {
    type: 'postgres',
    url: configService.get('DATABASE_URL'),
    name: 'default',
    migrationsRun: true,
    logging: false,
    synchronize: false,
    entities: [
        process.env.ENVIRONMENT == 'prod'
            ? '**/infrastructure/persistence/typeorm/entities/*{.ts,.js}'
            : 'dist/**/infrastructure/persistence/typeorm/entities/*{.ts,.js}',
    ],
    migrations: [
        process.env.ENVIRONMENT == 'prod'
            ? 'common/infrastructure/persistence/typeorm/migrations/*{.ts,.js}'
            : 'dist/common/infrastructure/persistence/typeorm/migrations/*{.ts,.js}',
    ],
    migrationsTableName: 'migrations',
    namingStrategy: new SnakeNamingStrategy(),
}

export const AppDS = new DataSource(DataSourceConfig);