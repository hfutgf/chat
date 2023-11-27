import Button from "@/components/ui/button/Button";
import Field from "@/components/ui/field/Field";
import { AtSign, KeyRound } from "lucide-react";
import React, { FormEventHandler } from "react";
import { useForm } from "react-hook-form";
import { IAuthFormState } from "./auth.types";
import { signIn } from "next-auth/react";
import { getRandomFullName } from "@/utils/get-random-full-name.utils";

interface IAuth {
  type?: "Login" | "Register";
}

export default function Auth({ type }: IAuth) {
  const { register } = useForm<IAuthFormState>({ mode: "onChange" });

  const onSubmit: FormEventHandler<HTMLFormElement> = async (data) => {
    if (type === "Login") {
      await signIn("credentials", { redirect: false, ...data });
    } else {
      await signIn;
      await signIn("credentials", {
        redirect: false,
        username: getRandomFullName(),
        ...data,
      });
    }
  };

  return (
    <div className="w-screen flex flex-col  items-center justify-center h-screen pb-[10%]">
      <h1 className="mb-[24px] font-[600] text-[32px]">{type}</h1>
      <form
        onSubmit={onSubmit}
        className="flex items-center flex-col gap-[24px] w-[400px]"
      >
        <Field
          {...register("email", {
            required: true,
          })}
          type="text"
          placeholder="Enter email:"
          Icon={AtSign}
          error={{ message: "Неверный логин!", type: "min" }}
        />
        <Field
          {...register("password", {
            required: true,
            minLength: { value: 6, message: "Min length 6 symbols" },
          })}
          type="password"
          placeholder="Enter password:"
          Icon={KeyRound}
          error={{ message: "Неверный пароль!", type: "min" }}
        />
        <Button type="submit">{type}</Button>
      </form>
    </div>
  );
}
