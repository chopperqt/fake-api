export class FakeDto {
  schema: Schema<TPerson | TPhone>;
  count?: number;
}

interface Schema<T> {
  [key: string]: Item<T>;
}

interface Item<T> {
  type: Model;
  method: T;
  options: any;
}

type Model = 'person' | 'phone';
type PersonMethod = 'firstName' | 'sex' | 'lastName' | 'jobTitle';
type PhoneMethod = 'emai' | 'phone';

type TPerson = Item<PersonMethod>;
type TPhone = Item<PhoneMethod>;
