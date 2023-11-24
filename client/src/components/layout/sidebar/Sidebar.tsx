"use client";
import { Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { sidebarRoutes } from "./routes";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center justify-between border-r-2 h-full  border-brCl py-4 px-2 ">
      <Link href={"/"}>
        <Image
          src={"/svg/logo.svg"}
          priority
          width={56}
          height={56}
          alt="logo"
        />
      </Link>
      <div className="flex flex-col gap-8">
        {sidebarRoutes.map((route) => (
          <Link href={`${route.url}`} key={route.url}>
            <route.icon
              size={32}
              className={`opacity-50  hover:opacity-100 transition ease-in-out duration-300 ${
                pathname === route.url ? "opacity-100" : ""
              }`}
            />
          </Link>
        ))}
      </div>
      <div>
        <Link href={"/"}>
          <Sun
            size={32}
            className="opacity-50 hover:text-white hover:opacity-100 transition ease-in-out duration-300"
          />
        </Link>
      </div>
    </div>
  );
}
