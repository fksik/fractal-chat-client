import { User } from './user';
import { Participant } from './participants';

export interface Conversation {
  _id: string;
  createdAt: number;
  isPrivate: boolean;
  url?: string;
  createdBy: User;
  participants: Participant[];
  account: any;
}
