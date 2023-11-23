import React, { PropsWithChildren } from "react";
import Sidebar from "./sidebar/Sidebar";

export default function LayoutClient({ children }: PropsWithChildren) {
  return (
    <main className="layout grid h-full">
      <Sidebar />
      {children}
    </main>
  );
}
