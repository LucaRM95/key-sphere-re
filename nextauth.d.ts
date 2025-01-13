import { DefaultSession, DefaultUser } from "next-auth";

interface IUser extends DefaultUser {
  id: string;
  name: string;
  email: string;
  emailVerified?: boolean;
  roles?: string[];
  image?: string;
};

declare module 'next-auth' {
  interface Session {
    user?: User 
  }
}

declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}