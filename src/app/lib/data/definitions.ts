export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Character = {
  id: string;
  name: string;
  avatar: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type HeaderLinks = {
  id: string;
  href: string;
  text: string;
};