export interface User {
  _id: string;
  createdDate: number;
  isBot: boolean;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  picture?: string;
}
