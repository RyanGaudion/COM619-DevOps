import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../../lib/mongodb"

export const authOptions = {
    callbacks: {
        async session({session, user}){
            session.user.id = user.id;
            return session;
        },
    },
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],
}
export default NextAuth(authOptions);