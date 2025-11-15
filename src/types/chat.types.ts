export enum Sender {
  User,
  Model,
}

export interface Message {
  id: string;
  sender: Sender;
  text: string;
}

export interface ChatSession {
  sendMessage: (params: { message: string }) => Promise<{ text: string }>;
}
