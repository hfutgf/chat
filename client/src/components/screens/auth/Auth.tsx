import Button from "@/components/ui/button/Button";
import Field from "@/components/ui/field/Field";
import { AtSign, KeyRound } from "lucide-react";
import React, { FC } from "react";

interface IAuth {
  type?: "Login" | "Register";
}

export default function Auth({ type }: IAuth) {
  return (
    <div className="w-screen flex flex-col  items-center justify-center h-screen pb-[10%]">
      <h1 className="mb-[24px] font-[600] text-[32px]">{type}</h1>
      <form className="flex items-center flex-col gap-[24px] w-[400px]">
        <Field
          type="text"
          placeholder="Enter email:"
          Icon={AtSign}
          error={{ message: "Неверный логин!", type: "min" }}
        />
        <Field
          type="password"
          placeholder="Enter password:"
          Icon={KeyRound}
          error={{ message: "Неверный пароль!", type: "min" }}
        />
        <Button>{type}</Button>
      </form>
    </div>
  );
}
