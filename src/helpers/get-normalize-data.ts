import { HttpException, HttpStatus } from '@nestjs/common';

import { FakeItemDto } from 'src/dto/fake.dto';
import { Faker } from '@faker-js/faker';

export const getNomralizedData = (
  { type, method, options }: FakeItemDto,
  faker: Faker,
) => {
  try {
    return faker[type][method](options);
  } catch (e) {
    throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
  }
};
