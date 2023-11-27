import { $fetch } from "@/$api/api.fetch";
import { IAuthFormState } from "@/components/screens/auth/auth.types";
import { IUser } from "@/types/user.types";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

const options = {
  providers: [
    Credentials({
      credentials: {
        username: { type: "text" },
        email: {
          type: "text",
        },
        password: {
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        if (credentials?.username) {
          const data = await $fetch.post<{ user: IUser; jwt: string }>(
            `/auth/local/register`,
            credentials
          );

          console.log("register", data);

          return null;
        }

        const data = await $fetch.post<{ user: IUser; jwt: string }>(
          `/auth/local/register`,
          {
            indentifier: credentials.email,
            password: credentials.password,
          }
        );
        console.log("login", data);

        // const data = await $fetch.get<IUser[]>(
        //   `/users?filters[email][$eq]=${credentials?.email}`
        // );

        return null;
      },
    }),
  ],
};

export default NextAuth(options);
