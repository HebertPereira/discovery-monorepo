/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import { MASKS, formatCNPJ, getDate } from '@monorepo/utils';
import { Injectable } from '@nestjs/common';

export interface getHelloProps {
  cnpj: string;
  cnpjMask: string;
  atDate: string;
}

@Injectable()
export class AppService {
  getHello(): getHelloProps {
    return {
      cnpj: formatCNPJ('13623956662451'),
      cnpjMask: MASKS.cnpj,
      atDate: getDate('atDate')
    };
  }
}
