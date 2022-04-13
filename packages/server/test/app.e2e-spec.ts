/* eslint-disable import/no-extraneous-dependencies */
import { MASKS, formatCNPJ, getDate } from '@monorepo/utils';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect({
        cnpj: formatCNPJ('13623956662451'),
        cnpjMask: MASKS.cnpj,
        atDate: getDate('atDate')
      });
  });
});
