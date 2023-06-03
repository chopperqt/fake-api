import { Contains, IsNotEmpty, IsString } from 'class-validator';

const PersonMethods = 'firstName' || 'sex' || 'lastName' || 'jobTitle';
const PhoneMethods = 'imei' || 'number';
const Methods = PersonMethods || PhoneMethods;

export class FakeItemDto {
  @IsNotEmpty()
  @IsString()
  @Contains('person' || 'phone')
  type: Model;
  @IsString()
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
