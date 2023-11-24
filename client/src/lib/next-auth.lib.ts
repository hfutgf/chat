import { IAuthFormState } from "@/components/screens/auth/auth.types";
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

        return null;
      },
    }),
  ],
};
