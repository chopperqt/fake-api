import { Injectable } from '@nestjs/common';
import { Faker } from '@faker-js/faker';

import { FakeItemDto } from './dto/fake.dto';
import { getNomralizedData } from './helpers/get-normalize-data';
import { Locale, TLocale } from './locale';

@Injectable()
export class AppService {
  getHello(
    schema: [key: string, item: FakeItemDto][],
    count?: number,
    locale: TLocale = 'en',
  ) {
    const customFacker = new Faker({ locale: [Locale[locale]] });

    if (!count || count < 1) {
      let formattedData = {};

      schema.map(([key, item]) => {
        formattedData = {
          ...formattedData,
          [key]: getNomralizedData(item, customFacker),
        };
      });

      return formattedData;
    }

    const formattedData = [];

    for (let i = 0; i < count; i++) {
      let data = {};

      schema.map(([key, item]) => {
        data = {
          ...data,
          [key]: getNomralizedData(item, customFacker),
        };
      });

      formattedData.push(data);
    }

    return formattedData;
  }
}
