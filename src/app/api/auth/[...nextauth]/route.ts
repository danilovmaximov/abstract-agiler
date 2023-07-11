import NextAuth, {AuthOptions} from "next-auth";
import { getProviders } from "@/app/api/auth/[...nextauth]/utils";
import {prisma} from "@/db";

/**
 * Configuration of authorization/authentication mechanisms.
 */
export const OPTIONS: AuthOptions = {
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
            } as any);
            return true;
        },
        async jwt({token, user, account , trigger}) {
            return token;
        },
        async session({session, token}) {
            return session;
        }
    },
}
const handler = NextAuth(OPTIONS);

export {handler as GET, handler as POST}