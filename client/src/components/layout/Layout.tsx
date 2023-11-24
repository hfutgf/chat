import React, { PropsWithChildren } from "react";
import Sidebar from "./sidebar/Sidebar";

export default function LayoutClient({ children }: PropsWithChildren) {
  const isLoggedIn = false;

  return (
    <main className="layout grid h-full">
      {isLoggedIn && <Sidebar />}

      {children}
    </main>
  );
}
