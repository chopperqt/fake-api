import { Contains, IsNotEmpty, Max } from 'class-validator';

const PersonMethods = 'firstName' || 'sex' || 'lastName' || 'jobTitle';
const PhoneMethods = 'imei' || 'number';
const Methods = PersonMethods || PhoneMethods;
const Models = 'person' || 'phone';

export class FakeItemDto {
  @IsNotEmpty()
  @Contains(Models)
  type: Model;
  @IsNotEmpty()
  @Contains(Methods)
  method: TPerson & TPhone;
  options: any;
}

export class FakeDto {
  @IsNotEmpty()
  schema: {
    [key: string]: FakeItemDto;
  };
  @Max(1000)
  count?: number;
}

interface Item<T> {
  type: Model;
  method: T;
  options: any;
}

type Model = 'person' | 'phone';
type PersonMethod = 'firstName' | 'sex' | 'lastName' | 'jobTitle';
type PhoneMethod = 'imei' | 'phone';

type TPerson = Item<PersonMethod>;
type TPhone = Item<PhoneMethod>;
