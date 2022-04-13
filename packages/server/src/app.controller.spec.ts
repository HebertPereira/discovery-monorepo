/* eslint-disable import/no-extraneous-dependencies */
import { MASKS, formatCNPJ, getDate } from '@monorepo/utils';
import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toEqual({
        cnpj: formatCNPJ('13623956662451'),
        cnpjMask: MASKS.cnpj,
        atDate: getDate('atDate')
      });
    });
  });
});
