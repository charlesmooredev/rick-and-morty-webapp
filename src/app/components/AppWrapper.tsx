"use client";
import { ReactNode } from "react";
import ReduxProvider from "@/app/components/Store/ReduxProvider";

export default function AppWrapper({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  return (
    <ReduxProvider>
      <div className="flex h-screen w-screen justify-center bg-black">
        <div className="w-full px-[10px] lg:w-[1280px] lg:px-0">{children}</div>
      </div>
    </ReduxProvider>
  );
}
