import { fakerRU } from '@faker-js/faker';

const { person } = fakerRU;

const {
  bio,
  firstName,
  fullName,
  gender,
  jobArea,
  jobDescriptor,
  jobTitle,
  jobType,
  lastName,
  middleName,
  prefix,
  sex,
  sexType,
  suffix,
  zodiacSign,
} = person;

export const PersonModel = {
  bio,
  firstName,
  fullName,
  gender,
  jobArea,
  jobDescriptor,
  jobTitle,
  jobType,
  lastName,
  middleName,
  prefix,
  sex,
  sexType,
  suffix,
  zodiacSign,
};
