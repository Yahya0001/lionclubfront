export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: any;
  birthday: string;
  type: string;
  last_login?: any;
  photo?: string;
  created_at: Date;
  updated_at: Date;
}

export default interface Login {
  user: User;
  access_token: string;
}

