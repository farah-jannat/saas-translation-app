import { DefaultSession } from "next-auth";
import NextAuth,{defaultSession} from "next-auth/next";

declare module 'next-auth' {
    interface Session{
        firebaseToken?:string;

        user:{
            id:string;
        }& DefaultSession["user"]
    }
}
