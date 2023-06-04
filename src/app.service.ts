import { Injectable } from '@nestjs/common';

import { FakeItemDto } from './dto/fake.dto';
import { getNomralizedData } from './helpers/get-normalize-data';

@Injectable()
export class AppService {
  getHello(schema: [key: string, item: FakeItemDto][], count?: number) {
    if (!count || count < 1) {
      let formattedData = {};

      schema.map(([key, item]) => {
        formattedData = {
          ...formattedData,
          [key]: getNomralizedData(item),
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
          [key]: getNomralizedData(item),
        };
      });

      formattedData.push(data);
    }

    return formattedData;
  }
}
