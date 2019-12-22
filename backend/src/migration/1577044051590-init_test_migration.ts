import {MigrationInterface, QueryRunner} from "typeorm";

export class initTestMigration1577044051590 implements MigrationInterface {
    name = 'initTestMigration1577044051590'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "test_data" ("id" SERIAL NOT NULL, "data" character varying NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_ed33781d3c2d7c4b1de10cb6bda" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "test_data"`, undefined);
    }

}
