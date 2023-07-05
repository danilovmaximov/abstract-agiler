import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import DiscordProvider from "next-auth/providers/discord";
import TwitterProvider from "next-auth/providers/twitter";
import GithubProvider from "next-auth/providers/github";

export function getProviders() {
    return [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        //TODO: register app
        AppleProvider({
            clientId: process.env.APPLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),

        //TODO: register app
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID || "",
            clientSecret: process.env.DISCORD_CLIENT_SECRET || ""
        }),

        //TODO: register app
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID || "",
            clientSecret: process.env.TWITTER_CLIENT_SECRET || ""
        }),

        //TODO: register app
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
        })
    ]
}