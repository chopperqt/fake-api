import { Injectable } from '@nestjs/common';

import { fakerRU } from '@faker-js/faker';

const { person, phone } = fakerRU;

const PersonModel = {
  firstName: person.firstName,
  sex: person.sex,
  lastName: person.lastName,
  jobTitle: person.jobTitle,
};

const PhoneModel = {
  imei: phone.imei,
  number: phone.number,
};

const Model = {
  phone: PhoneModel,
  person: PersonModel,
};

@Injectable()
export class AppService {
  getHello(obj: any) {
    let data = {};

    obj.map(([key, { type, method, options }]) => {
      data = {
        ...data,
        [key]: Model[type][method](options),
      };
    });

    return data;
  }
}
