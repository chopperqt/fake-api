import { fakerRU } from '@faker-js/faker';

const { phone } = fakerRU;

export const PhoneModel = {
  imei: phone.imei,
  number: phone.number,
};
