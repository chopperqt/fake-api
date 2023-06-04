import { HttpException, HttpStatus } from '@nestjs/common';

import { FakeItemDto } from 'src/dto/fake.dto';
import { Models } from 'src/models';

export const getNomralizedData = ({ type, method, options }: FakeItemDto) => {
  try {
    return Models[type][method](options);
  } catch (e) {
    throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
  }
};
