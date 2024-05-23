import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import github from "next-auth/providers/github"
import Resend from "next-auth/providers/resend"
import Postmark from "next-auth/providers/postmark"

import { database } from "@/db/database"
import { accounts, sessions, users, verificationTokens } from "./db/schema"
import { env } from "./env"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(database, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens}),
  providers: [github, Resend({
    from: env.EMAIL_FROM,
  }), Postmark],
})