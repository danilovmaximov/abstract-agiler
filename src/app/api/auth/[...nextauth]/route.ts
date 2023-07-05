import NextAuth from "next-auth";
import { getProviders } from "@/app/api/auth/[...nextauth]/utils";
import {prisma} from "@/db";

/**
 * Configuration of authorization/authentication mechanisms.
 */
const handler = NextAuth({
    providers: getProviders(),
    callbacks: {
        async signIn({
                user, account, profile,
                email,
                credentials
        }) {
            //Find user in db.
            console.log("Sign in");
            const persistedUser = await prisma.user.findUnique({
                where: { email: user.email || "" }
            });
            console.log("First query to db");
            if(persistedUser?.email) {
                return true;
            }
            console.log("User not found. Custom row in db.")
            // Persist if
            await prisma.user.create({
                data: { email: user.email || "" }
            });
            return true;
        },
        async jwt({token, user, account , trigger}) {
            return token;
        },
        async session({session, token}) {
            return session;
        }
    },
});

export {handler as GET, handler as POST}