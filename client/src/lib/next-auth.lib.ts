import { $fetch } from "@/$api/api.fetch";
import { IAuthFormState } from "@/components/screens/auth/auth.types";
import { IUser } from "@/types/user.types";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

const options = {
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter email...",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter password...",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials as IAuthFormState;

        const data = await $fetch.get<IUser[]>(
          `/users?filters[email][$eq]=${email}`
        );

        console.log(data);

        return null;
      },
    }),
  ],
};

export default NextAuth(options);
